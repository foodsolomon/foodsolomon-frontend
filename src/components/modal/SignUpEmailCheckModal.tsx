import React, { useState } from 'react';
import styled from 'styled-components';
import { VscClose } from 'react-icons/vsc';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ImEye, ImEyeBlocked } from 'react-icons/im';

interface ContainerProps {
  toggleContinue: string;
}

const MainContainer = styled.div`
  width: 564px;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  margin-right: 76px;
  /* border: 1px solid red; */
`;

const SignUpEmailCheckModalContainer = styled.div<ContainerProps>`
  width: 494px;
  height: ${(props) =>
    props.toggleContinue === '계속하기' ? '483px' : '880px'};
  transition: all linear 0.2s;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  border-radius: 15px;
`;

const ModalTitle = styled.div`
  width: 424px;
  height: 79px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-size: 24px;
    font-weight: 700;
  }
`;

const FormWrapper = styled.form<{ toggleContinue: string }>`
  height: ${(props) =>
    props.toggleContinue === '계속하기' ? '199px' : '672px'};
  /* border: 1px solid red; */
  /* transition: all linear 0.s; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ModalEmailBox = styled.div`
  width: 424px;
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
    padding-left: 15px;
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
    color: #413b2d;
    padding-left: 15px;
    &:-webkit-autofill::first-line {
      font-size: 17px;
    }
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
      font-size: 17px;
    }
  }
`;

const SignUpEmailCheckModalWrapper = styled.div<ContainerProps>`
  width: 424px;
  height: ${(props) =>
    props.toggleContinue === '계속하기' ? '383px' : '780px'};
  transition: all linear 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  h4 {
    font-weight: 700;
    font-size: 18px;
  }
`;
const FluidWrapper = styled.div`
  height: 417px;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InputWrapper = styled.div`
  height: 119px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ContinueButton = styled.button<{ disabled: boolean }>`
  width: 280px;
  height: 66px;
  background: ${(props) => (props.disabled ? '#cfc7ba' : '#F35C1B')};
  /* transition: all linear 0.5s; */
  color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 25px;
  border: none;
  align-self: center;
`;

const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 200px;
  height: 50px;
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
const CloseButton = styled(VscClose)`
  width: 40px;
  height: 40px;
  &:hover {
    cursor: pointer;
  }
  color: white;
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
  close: VoidFunction;
  setModalIndex: (e: number) => void;
}

type FormValues = {
  email: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
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
  nickname: yup.string().required('반드시 입력해야하는 필수 사항입니다.'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], '위의 비밀번호와 일치하지 않아요.')
    .required('반드시 입력해야하는 필수 사항입니다.'),
});

function SignUpEmailCheckModal({ close, setModalIndex }: ChildProps) {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FormValues>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const [toggleContinue, setToggleContinue] = useState('계속하기');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const ToggleShowPassword = () => {
    setShowPassword((prev: boolean) => !prev);
  };

  const ToggleShowPasswordConfirm = () => {
    setShowPasswordConfirm((prev: boolean) => !prev);
  };

  const handleToggleContinue = () => {
    setToggleContinue('회원가입');
  };

  const goNextPage = () => {
    if (toggleContinue === '회원가입') setModalIndex(2);
  };

  const onSubmit = () => {
    console.log('submit');
  };

  const onError = (error: any) => {
    console.log(error);
  };

  const emailIsValid = (emailError: any) => {
    return emailError ? true : false;
  };

  return (
    <MainContainer>
      <SignUpEmailCheckModalContainer
        onClick={(e: any) => e.stopPropagation()}
        toggleContinue={toggleContinue}
      >
        <SignUpEmailCheckModalWrapper toggleContinue={toggleContinue}>
          <ModalTitle>
            <h3>
              푸드솔로몬의
              <br />
              멤버가 되어주세요!
            </h3>
          </ModalTitle>
          <FormWrapper
            onSubmit={handleSubmit(onSubmit, onError)}
            toggleContinue={toggleContinue}
          >
            <InputWrapper>
              <ModalEmailBox>
                <label htmlFor='signUpEmail'>이메일</label>
                <input
                  id='signUpEmail'
                  type='email'
                  placeholder='이메일을 적어주세요'
                  {...register('email', { required: true })}
                />
              </ModalEmailBox>
              {errors.email && (
                <ErrorMessageBox>{errors.email?.message}</ErrorMessageBox>
              )}
            </InputWrapper>

            {toggleContinue === '회원가입' && (
              <FluidWrapper>
                <InputWrapper>
                  <ModalEmailBox>
                    <label htmlFor='nickname'>별명</label>
                    <input
                      id='nickname'
                      type='text'
                      placeholder='앞으로 사용할 별명을 적어주세요'
                      {...register('nickname', { required: true })}
                    />
                  </ModalEmailBox>
                  {errors.nickname && (
                    <ErrorMessageBox>
                      {errors.nickname?.message}
                    </ErrorMessageBox>
                  )}
                </InputWrapper>
                <InputWrapper>
                  <ModalEmailBox>
                    <label htmlFor='signUpPassword'>비밀번호</label>
                    <input
                      id='signUpPassword'
                      type={showPassword ? 'text' : 'password'}
                      placeholder='비밀번호를 적어주세요'
                      {...register('password', { required: true })}
                    />
                    {showPassword ? (
                      <EyeIcon onClick={ToggleShowPassword} />
                    ) : (
                      <EyeBlockedIcon onClick={ToggleShowPassword} />
                    )}
                  </ModalEmailBox>
                  {errors.password && (
                    <ErrorMessageBox>
                      {errors.password?.message}
                    </ErrorMessageBox>
                  )}
                </InputWrapper>
                <InputWrapper>
                  <ModalEmailBox>
                    <label htmlFor='passwordConfirm'>비밀번호 확인</label>
                    <input
                      id='passwordConfirm'
                      type={showPasswordConfirm ? 'text' : 'password'}
                      placeholder='비밀번호를 한 번 더 적어주세요'
                      {...register('passwordConfirm', { required: true })}
                    />
                    {showPasswordConfirm ? (
                      <EyeIcon onClick={ToggleShowPasswordConfirm} />
                    ) : (
                      <EyeBlockedIcon onClick={ToggleShowPasswordConfirm} />
                    )}
                  </ModalEmailBox>
                  {errors.passwordConfirm && (
                    <ErrorMessageBox>
                      {errors.passwordConfirm?.message}
                    </ErrorMessageBox>
                  )}
                </InputWrapper>
              </FluidWrapper>
            )}
            <ContinueButton
              onClick={() => {
                handleToggleContinue();
                goNextPage();
              }}
              disabled={
                toggleContinue === '계속하기'
                  ? emailIsValid(errors.email)
                  : !isValid
              }
            >
              {toggleContinue}
            </ContinueButton>
          </FormWrapper>
          {toggleContinue === '계속하기' && (
            <BottomBox>
              <p>이미 회원가입 하셨나요?</p>
              <p>
                <u>로그인</u>
              </p>
            </BottomBox>
          )}
        </SignUpEmailCheckModalWrapper>
      </SignUpEmailCheckModalContainer>
      <CloseButton onClick={close} />
    </MainContainer>
  );
}

export default SignUpEmailCheckModal;
