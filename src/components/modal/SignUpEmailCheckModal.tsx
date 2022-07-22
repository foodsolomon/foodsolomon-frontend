import React, { useState } from 'react';
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import InputDefault from '../../elements/InputDefault';

interface ContainerProps {
  toggleContinue: string;
}

const SignUpEmailCheckModalContainer = styled.div<ContainerProps>`
  width: 500px;
  height: ${(props) =>
    props.toggleContinue === '계속하기' ? '562px' : '904px'};
  transition: all linear 0.5s;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 76px;
  border: 1px solid grey;
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

const ModalEmailBox = styled.div`
  color: grey;
  width: 424px;
  height: 90px;
`;

const SignUpEmailCheckModalWrapper = styled.div<ContainerProps>`
  width: 424px;
  height: ${(props) =>
    props.toggleContinue === '계속하기' ? '462px' : '804px'};
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

const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 200px;
  height: 50px;
`;

interface ChildProps {
  close: VoidFunction;
  setModalIndex: (e: number) => void;
}

function SignUpEmailCheckModal({ close, setModalIndex }: ChildProps) {
  const [toggleContinue, setToggleContinue] = useState('계속하기');

  const handleToggleContinue = () => {
    setToggleContinue('회원가입');
  };

  const goNextPage = () => {
    if (toggleContinue === '회원가입') setModalIndex(3);
  };

  return (
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
          <IoMdClose size={24} fontWeight={700} onClick={close} />
        </ModalTitle>
        <ModalEmailBox>
          <h4>이메일</h4>
          <InputDefault placeholder='이메일을 적어주세요' />
        </ModalEmailBox>
        {toggleContinue === '회원가입' && (
          <>
            <ModalEmailBox>
              <h4>별명</h4>
              <InputDefault placeholder='앞으로 사용할 별명을 적어주세요' />
            </ModalEmailBox>
            <ModalEmailBox>
              <h4>비밀번호</h4>
              <InputDefault placeholder='비밀번호를 적어주세요' />
            </ModalEmailBox>
            <ModalEmailBox>
              <h4>비밀번호 확인</h4>
              <InputDefault placeholder='비밀번호를 한 번 더 적어주세요' />
            </ModalEmailBox>
          </>
        )}
        <ContinueButton
          onClick={() => {
            handleToggleContinue();
            goNextPage();
          }}
        >
          {toggleContinue}
        </ContinueButton>
        <BottomBox>
          <p>이미 회원가입 하셨나요?</p>
          <p>
            <u>로그인</u>
          </p>
        </BottomBox>
      </SignUpEmailCheckModalWrapper>
    </SignUpEmailCheckModalContainer>
  );
}

export default SignUpEmailCheckModal;
