import React from 'react';
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import InputDefault from '../../elements/InputDefault';

const SignUpModalContainer = styled.div`
  width: 500px;
  height: 904px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpEmailCheckModalWrapper = styled.div`
  width: 424px;
  height: 804px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  h4 {
    font-weight: 700;
    font-size: 18px;
  }
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
  h4 {
    margin-bottom: 10px;
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

const CloseButton = styled(IoMdClose)`
  font-size: 40px;
  font-weight: 700;
  &:hover {
    cursor: pointer;
  }
`;

function SignUpModal() {
  return (
    <SignUpModalContainer onClick={(e: any) => e.stopPropagation()}>
      <SignUpEmailCheckModalWrapper>
        <ModalTitle>
          <h3>
            푸드솔로몬의
            <br />
            멤버가 되어주세요!
          </h3>
          <CloseButton />
        </ModalTitle>
        <ModalEmailBox>
          <h4>이메일</h4>
          <InputDefault placeholder='이메일을 적어주세요' />
        </ModalEmailBox>
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
        <ContinueButton>회원가입</ContinueButton>
        <BottomBox>
          <p>이미 회원가입 하셨나요?</p>
          <p>
            <u>로그인</u>
          </p>
        </BottomBox>
      </SignUpEmailCheckModalWrapper>
    </SignUpModalContainer>
  );
}

export default SignUpModal;
