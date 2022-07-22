import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SiNaver, SiKakaotalk } from 'react-icons/si';
import { FaGoogle } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import LoginButton from '../../elements/LoginButton';
import InputDefault from '../../elements/InputDefault';

const EmailLoginModalContainer = styled.div`
  width: 500px;
  height: 660px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 76px;
  border: 1px solid grey;
  border-radius: 15px;
`;

const EmailLoginModalWrapper = styled.div`
  width: 424px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const ModalTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-size: 24px;
    font-weight: 700;
  }
`;

const ModalEmailBox = styled.div`
  color: grey;
  #link {
    display: inline-block;
    margin-top: 10px;
  }
`;

const SignUpBox = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  p {
    color: grey;
    margin-bottom: 20px;
  }
`;

const CloseButton = styled(IoMdClose)`
  font-size: 40px;
  font-weight: 700;
  &:hover {
    cursor: pointer;
  }
`;

const LoginBtn = styled(LoginButton)`
  width: 357px;
  height: 78px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 25px;
  border: none;
`;

const SocialLoginBox = styled.div`
  width: 280px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SocialLoginBtn = styled.div`
  width: 77px;
  height: 77px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
`;

const KakaoLoginBtn = styled(SocialLoginBtn)`
  background: #ffdd66;
`;

const NaverLoginBtn = styled(SocialLoginBtn)`
  background: green;
`;

const GoogleLoginBtn = styled(SocialLoginBtn)`
  background: white;
  border: 1px solid grey;
`;

const MaintainLoginBox = styled.div`
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

interface ChildProps {
  close: () => void;
  setModalIndex: (e: number) => void;
}

function EmailLoginModal({ close, setModalIndex }: ChildProps) {
  const openAlert = () => {
    alert('개발중');
  };

  return (
    <EmailLoginModalContainer onClick={(e: any) => e.stopPropagation()}>
      <EmailLoginModalWrapper>
        <ModalTitle>
          <h3>다시 만나서 반가워요!</h3>
          <CloseButton onClick={close} />
        </ModalTitle>
        <ModalEmailBox>
          <h4>이메일</h4>
          <InputDefault placeholder='이메일을 적어주세요' />
        </ModalEmailBox>
        <ModalEmailBox>
          <h4>패스워드</h4>
          <InputDefault placeholder='패스워드를 적어주세요' />
          <Link to='/' id='link'>
            비밀번호가 기억이 안나세요?
          </Link>
        </ModalEmailBox>
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
        <MaintainLoginBox>
          <label htmlFor='maintainLoginCheck'>
            <input type='checkbox' name='' id='maintainLoginCheck' />
            <span>로그인 유지하기</span>
          </label>
        </MaintainLoginBox>
        <LoginBtn onClick={openAlert} />
        <SignUpBox>
          <p>회원이 아니세요?</p>
          <Link to='/' onClick={() => setModalIndex(2)}>
            회원가입
          </Link>
        </SignUpBox>
      </EmailLoginModalWrapper>
    </EmailLoginModalContainer>
  );
}

export default EmailLoginModal;
