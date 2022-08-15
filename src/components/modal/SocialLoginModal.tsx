import React from 'react';
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import SocialLoginButton from '../../elements/SocialLoginButton';

const LoginContainer = styled.div`
  width: 500px;
  height: 660px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  margin-right: 76px;
  border: 1px solid grey;
  border-radius: 15px;
`;

const SocialLoginModalWrapper = styled.div`
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

const CloseButton = styled(IoMdClose)`
  font-size: 30px;
  font-weight: 700;
  &:hover {
    cursor: pointer;
  }
`;

const SocialLoginBtn = styled(SocialLoginButton)<{ sns: string }>`
  background-color: ${(props) => {
    if (props.sns === '카카오') {
      return 'yellow';
    }
    if (props.sns === '네이버') {
      return 'green';
    }
    if (props.sns === '구글') {
      return 'white';
    }
    return 'grey';
  }};
`;

interface ChildProps {
  close: () => void;
  setModalIndex: (e: number) => void;
}

function SocialLoginModal({ close, setModalIndex }: ChildProps) {
  return (
    <LoginContainer onClick={(e: any) => e.stopPropagation()}>
      <SocialLoginModalWrapper>
        <ModalTitle>
          <h3>
            간편 로그인하고
            <br />
            서비스를 즐겨보세요
          </h3>
          <CloseButton onClick={close} />
        </ModalTitle>
        <SocialLoginBtn sns="카카오" />
        <SocialLoginBtn sns="네이버" />
        <SocialLoginBtn sns="구글" />
        <SocialLoginBtn sns="이메일" onClick={() => setModalIndex(1)} />
      </SocialLoginModalWrapper>
    </LoginContainer>
  );
}

export default SocialLoginModal;
