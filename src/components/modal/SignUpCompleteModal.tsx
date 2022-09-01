import React from 'react';
import styled from 'styled-components';
import { VscClose } from 'react-icons/vsc';

const MainContainer = styled.div`
  width: 564px;
  height: 284px;
  display: flex;
  justify-content: space-between;
  margin-right: 76px;
`;

const SignUpCompleteModalContainer = styled.div`
  width: 494px;
  height: 284px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border: 1px solid grey;
  border-radius: 15px;
`;

const SignUpCompleteModalWrapper = styled.div`
  width: 424px;
  height: 184px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ContinueButton = styled.button`
  width: 280px;
  height: 66px;
  background: #f35c1b;
  color: white;
  border-radius: 10px;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: -0.02em;
  border: none;
`;

const ModalTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    font-weight: 600;
    font-size: 26px;
    line-height: 150%;
    letter-spacing: -0.02em;
    span {
      color: #f35c1b;
    }
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

interface ChildProps {
  close: () => void;
}

function SignUpCompleteModal({ close }: ChildProps) {
  return (
    <MainContainer>
      <SignUpCompleteModalContainer onClick={(e: any) => e.stopPropagation()}>
        <SignUpCompleteModalWrapper>
          <ModalTitle>
            <h3>
              <span>닉네임</span>님
              <br />
              환영합니다!
            </h3>
          </ModalTitle>
          <ContinueButton>시작하기</ContinueButton>
        </SignUpCompleteModalWrapper>
      </SignUpCompleteModalContainer>
      <CloseButton onClick={close} />
    </MainContainer>
  );
}

export default SignUpCompleteModal;
