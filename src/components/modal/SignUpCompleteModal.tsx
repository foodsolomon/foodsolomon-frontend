import React from 'react';
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';

const SignUpCompleteModalContainer = styled.div`
  width: 500px;
  height: 322px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  margin-right: 76px;
  border: 1px solid grey;
  border-radius: 15px;
`;

const SignUpCompleteModalWrapper = styled.div`
  width: 424px;
  height: 222px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const ContinueButton = styled.button`
  width: 357px;
  height: 78px;
  background: black;
  color: white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 25px;
  border: none;
`;

const ModalTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
  }
`;

const CloseButton = styled(IoMdClose)`
  font-size: 40px;
  font-weight: 700;
  &:hover {
    cursor: pointer;
  }
`;

interface ChildProps {
  close: () => void;
}

function SignUpCompleteModal({ close }: ChildProps) {
  return (
    <SignUpCompleteModalContainer onClick={(e: any) => e.stopPropagation()}>
      <SignUpCompleteModalWrapper>
        <ModalTitle>
          <h3>
            닉네임님
            <br />
            환영합니다!
          </h3>
          <CloseButton onClick={close} />
        </ModalTitle>
        <ContinueButton>시작하기</ContinueButton>
      </SignUpCompleteModalWrapper>
    </SignUpCompleteModalContainer>
  );
}

export default SignUpCompleteModal;
