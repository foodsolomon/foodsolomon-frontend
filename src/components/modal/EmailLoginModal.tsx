import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SiNaver, SiKakaotalk } from 'react-icons/si';
import { FaGoogle } from 'react-icons/fa';
import { VscClose } from 'react-icons/vsc';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ImEye, ImEyeBlocked } from 'react-icons/im';
import { loginUser } from '../../api/api';

const MainContainer = styled.div`
  width: 564px;
  height: 797px;
  display: flex;
  justify-content: space-between;
  margin-right: 76px;
`;

const EmailLoginModalContainer = styled.div`
  width: 494px;
  height: 797px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const EmailLoginModalWrapper = styled.div`
  width: 424px;
  height: 697px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  /* border: 1px solid blue; */
`;

const ModalTitle = styled.div`
  width: 100%;
  h3 {
    font-weight: 600;
    font-size: 26px;
    line-height: 150%;
    letter-spacing: -0.02em;
    color: #000000;
  }
  /* border: 1px solid red; */
`;

const InputWrapper = styled.form`
  width: 424px;
  height: 364px;
  /* border: 1px solid rebeccapurple; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    font-weight: 600;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: -0.02em;
    color: #413b2d;
    margin-left: 15px;
  }
`;

const ModalInputBox = styled.div`
  width: 100%;
  height: 93px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  label {
    height: 20px;
    font-weight: 600;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: -0.02em;
    color: #413b2d;
    margin-left: 15px;
  }

  input {
    width: 424px;
    height: 66px;
    background: #f9f8f4;
    border-radius: 10px;
    border: none;
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: -0.02em;
    color: #95866c;
    padding-left: 15px;
    &:autofill {
      box-shadow: 0 0 0px 1000px #f9f8f4 inset !important;
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
      -webkit-transition: background-color 9999s ease-out;
      -webkit-box-shadow: 0 0 0px 1000px #f9f8f4 inset !important;
      box-shadow: 0 0 0px 1000px #f9f8f4 inset !important;
      -webkit-text-fill-color: #95866c !important;
    }
  }
`;

const ErrorMessageBox = styled.div`
  width: 100%;
  height: 19px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: #f35c1b;
  padding-left: 15px;
`;

const SignUpBox = styled.div`
  /* border: 1px solid blue; */
  height: 51px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  p:nth-child(1) {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.02em;
    color: #95866c;
  }

  p:nth-child(2) {
    font-weight: 600;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: -0.02em;
    color: #413b2d;
    text-decoration: underline;
  }
`;

const CloseButton = styled(VscClose)`
  width: 40px;
  height: 40px;
  &:hover {
    cursor: pointer;
  }
  color: white;
`;

const LoginButton = styled.button<{ disabled: boolean }>`
  border: none;
  width: 280px;
  height: 66px;
  background: ${(props) => (props.disabled ? '#cfc7ba' : '#F35C1B')};
  border-radius: 10px;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: -0.02em;
  color: #ffffff;
  align-self: center;
`;

const BottomWrapper = styled.div`
  width: 100%;
  height: 165px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const SocialLoginBox = styled.div`
  width: 180px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid red; */
`;

const SocialLoginBtn = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 26px;
  * {
    width: 18.2px;
    height: 18.6px;
  }
`;

const KakaoLoginBtn = styled(SocialLoginBtn)`
  background: #ffdd66;
`;

const NaverLoginBtn = styled(SocialLoginBtn)`
  background: #7edd82;
`;

const GoogleLoginBtn = styled(SocialLoginBtn)`
  background: white;
  border: 1px solid #000000;
`;

const MaintainLoginBox = styled.div`
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  /* border: 1px solid grey; */
`;
const EyeIcon = styled(ImEye)`
  color: #564e3e;
  font-size: 20px;
  position: absolute;
  top: 50px;
  right: 15px;
`;

const EyeBlockedIcon = styled(ImEyeBlocked)`
  color: #564e3e;
  font-size: 20px;
  position: absolute;
  top: 50px;
  right: 15px;
`;
interface ChildProps {
  close: () => void;
  setModalIndex: (e: number) => void;
}

type FormValues = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email('이메일 형식으로 적으셔야 합니다.')
    .required('반드시 입력해야하는 필수 사항입니다.'),
  password: yup
    .string()
    .min(8, '비밀번호는 8자 이상 15자 이하의 문자와 숫자로 적으셔야 합니다.')
    .max(15, '비밀번호는 8자 이상 15자 이하의 문자와 숫자로 적으셔야 합니다.')
    .required('반드시 입력해야하는 필수 사항입니다.'),
});

function EmailLoginModal({ close, setModalIndex }: ChildProps) {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FormValues>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({ email: '', password: '' });

  const ToggleShowPassword = () => {
    setShowPassword((prev: boolean) => !prev);
  };

  const openAlert = () => {
    alert('개발중');
    console.log(isValid);
  };
  const queryClient = useQueryClient();
  const { mutate, data, error, reset } = useMutation(loginUser, {
    onError: (err: any) => {
      console.log(err.response.data);
    },
    onSuccess: () => {
      console.log('로그인 성공!');
      console.log(queryClient);
    },
  });

  const onSubmit = (dataInput: any) => {
    setUserData(dataInput);
    console.log(dataInput);
    console.log(userData);
    mutate({ email: dataInput.email, password: dataInput.password });
    console.log(data);
  };

  const onError = (err: any) => {
    console.log(err);
  };

  return (
    <MainContainer>
      <EmailLoginModalContainer onClick={(e: any) => e.stopPropagation()}>
        <EmailLoginModalWrapper>
          <ModalTitle>
            <h3>
              푸드솔로몬입니다 <br />
              만나서 반가워요!
            </h3>
          </ModalTitle>
          <InputWrapper onSubmit={handleSubmit(onSubmit, onError)}>
            <ModalInputBox>
              <label htmlFor='email'>이메일</label>
              <input
                type='email'
                placeholder='이메일을 적어주세요.'
                id='email'
                onFocus={reset}
                {...register('email', { required: true })}
              />
            </ModalInputBox>
            {errors.email && (
              <ErrorMessageBox>{errors.email?.message}</ErrorMessageBox>
            )}
            {error?.response.data === 'Cannot find user' && (
              <ErrorMessageBox>찾을 수 없는 이메일입니다.</ErrorMessageBox>
            )}
            <ModalInputBox>
              <label htmlFor='password'>패스워드</label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='비밀번호를 적어주세요.'
                id='password'
                onFocus={reset}
                {...register('password', { required: true })}
              />
              {showPassword ? (
                <EyeIcon onClick={ToggleShowPassword} />
              ) : (
                <EyeBlockedIcon onClick={ToggleShowPassword} />
              )}
            </ModalInputBox>
            {errors.password && (
              <ErrorMessageBox>{errors.password?.message}</ErrorMessageBox>
            )}
            {error?.response.data === 'Incorrect password' && (
              <ErrorMessageBox>비밀번호가 틀렸습니다.</ErrorMessageBox>
            )}
            <Link to='/'>
              <p>비밀번호가 기억이 안나세요?</p>
            </Link>
            <LoginButton onClick={openAlert} disabled={!isValid}>
              로그인하기
            </LoginButton>
          </InputWrapper>
          <BottomWrapper>
            <MaintainLoginBox>
              <label htmlFor='maintainLoginCheck'>
                <input type='checkbox' name='' id='maintainLoginCheck' />
                <span>로그인 유지하기</span>
              </label>
            </MaintainLoginBox>
            <SocialLoginBox>
              <KakaoLoginBtn>
                <SiKakaotalk />
              </KakaoLoginBtn>
              <NaverLoginBtn>
                <SiNaver />
              </NaverLoginBtn>
              <GoogleLoginBtn>
                <FaGoogle />
              </GoogleLoginBtn>
            </SocialLoginBox>
            <SignUpBox>
              <p>회원이 아니세요?</p>
              <p onClick={() => setModalIndex(1)}>회원가입</p>
            </SignUpBox>
          </BottomWrapper>
        </EmailLoginModalWrapper>
      </EmailLoginModalContainer>
      <CloseButton onClick={close} />
    </MainContainer>
  );
}

export default EmailLoginModal;
