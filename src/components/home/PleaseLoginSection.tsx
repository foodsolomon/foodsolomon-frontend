import React from 'react';
import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs';

const PleaseLoginSectionContainer = styled.section`
  width: 100%;
  height: 403px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PleaseLoginWrapper = styled.div`
  width: 1140px;
  height: 243px;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const TextBox = styled.div`
  width: 419px;
  height: 109px;
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  h5 {
    font-weight: 600;
    font-size: 22px;
    line-height: 150%;
    letter-spacing: -0.02em;
    color: #292b32;
  }
  p {
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.02em;
    color: #616161;
  }
`;

const GoLoginButton = styled.button`
  width: 129px;
  height: 44px;
  background: #f1d3d5;
  border: 2px solid #292b32;
  border-radius: 6px;
`;

function PleaseLoginSection() {
  return (
    <PleaseLoginSectionContainer>
      <PleaseLoginWrapper>
        <TextBox>
          <h5>
            아직 로그인 안하셨나요?
            <br />
            로그인하고 더 다양하게 즐겨보세요!
          </h5>
          <p>
            내 취향을 기반으로 한 메뉴들과 내가 선택했던 메뉴들을 다시
            보여드려요.
          </p>
        </TextBox>
        <GoLoginButton>
          로그인 할게요
          <BsArrowRight style={{ marginLeft: '5px' }} />
        </GoLoginButton>
      </PleaseLoginWrapper>
    </PleaseLoginSectionContainer>
  );
}

export default PleaseLoginSection;
