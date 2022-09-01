import React, { useState } from 'react';
import styled from 'styled-components';
import EmailLoginModal from './EmailLoginModal';
import SignUpCompleteModal from './SignUpCompleteModal';
import SignUpEmailCheckModal from './SignUpEmailCheckModal';
// import SocialLoginModal from './SocialLoginModal';

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  /* background-color: rgba(255, 255, 255, 0.15); */
  background-color: rgba(2, 2, 2, 0.6);
  /* opacity: 0.6; */
  animation: modal-bg-show 1s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalBlock = styled.div`
  position: fixed;
  width: 564px;
  height: fit-content;
  overflow: hidden;
  border: 1px solid red;
  /* padding: 10px; */
  animation: modal-show 1s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

interface ContentsTypes {
  modalIndex: number;
}

const Contents = styled.div<ContentsTypes>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  transform: translateX(${(props) => props.modalIndex * -640}px);
  transition: all linear 0.05s;
  border: 1px solid blue;
`;

interface ModalFrameProps {
  close: any;
}

function ModalContainer({ close }: ModalFrameProps) {
  const [modalIndex, setModalIndex] = useState(0);
  return (
    <Container>
      <Background onClick={close} />
      <ModalBlock>
        <Contents modalIndex={modalIndex}>
          {/* <SocialLoginModal setModalIndex={setModalIndex} close={close} /> */}
          <EmailLoginModal setModalIndex={setModalIndex} close={close} />
          <SignUpEmailCheckModal setModalIndex={setModalIndex} close={close} />
          <SignUpCompleteModal close={close} />
        </Contents>
      </ModalBlock>
    </Container>
  );
}

export default ModalContainer;
