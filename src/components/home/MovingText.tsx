import React from 'react';
import styled from 'styled-components';

const MovingTextBox = styled.div`
  width: 100%;
  height: 50px;
  background: #f2f2ec;
  border-width: 2px 0px;
  border-style: solid;
  border-color: #009e52;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const MovingTextWrapper = styled.div`
  width: 2900px;
  height: 21px;
  /* border: 1px solid red; */
  display: flex;
`;

const MovingTextItem = styled.div`
  font-family: 'Montserrat';
  width: 222px;
  height: 21px;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #08a159;
  /* border: 1px solid blue; */
  text-align: center;
  animation: textLoop 2s linear infinite;
  @keyframes textLoop {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  }
`;

function MovingText() {
  return (
    <MovingTextBox>
      <MovingTextWrapper>
        <MovingTextItem>THE TOP 3 BEST MENUS ✺</MovingTextItem>
        <MovingTextItem>THE TOP 3 BEST MENUS ✺</MovingTextItem>
        <MovingTextItem>THE TOP 3 BEST MENUS ✺</MovingTextItem>
        <MovingTextItem>THE TOP 3 BEST MENUS ✺</MovingTextItem>
        <MovingTextItem>THE TOP 3 BEST MENUS ✺</MovingTextItem>
        <MovingTextItem>THE TOP 3 BEST MENUS ✺</MovingTextItem>
        <MovingTextItem>THE TOP 3 BEST MENUS ✺</MovingTextItem>
        <MovingTextItem>THE TOP 3 BEST MENUS ✺</MovingTextItem>
        <MovingTextItem>THE TOP 3 BEST MENUS ✺</MovingTextItem>
        <MovingTextItem>THE TOP 3 BEST MENUS ✺</MovingTextItem>
        <MovingTextItem>THE TOP 3 BEST MENUS ✺</MovingTextItem>
      </MovingTextWrapper>
    </MovingTextBox>
  );
}

export default MovingText;
