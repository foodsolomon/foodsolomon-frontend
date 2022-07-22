import React from 'react';
import styled from 'styled-components';

const CustomMenuSectionContainer = styled.section`
  width: 1400px;
  height: 600px; ;
`;

const WelcomeText = styled.h1`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  font-size: 20px;
  font-weight: 700;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const CustomMenuBox = styled.div`
  width: 400px;
  height: 500px;
  background: #a4a4a4;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function CustomMenuSection() {
  return (
    <CustomMenuSectionContainer>
      <WelcomeText>푸드솔로몬이 당신의 찰떡 메뉴를 찾아드려요!</WelcomeText>
      <MenuContainer>
        <CustomMenuBox>날씨 맞춤 메뉴 고르기</CustomMenuBox>
        <CustomMenuBox>내 취향 맞춤 메뉴 고르기</CustomMenuBox>
        <CustomMenuBox>기분 맞춤 메뉴 고르기</CustomMenuBox>
      </MenuContainer>
    </CustomMenuSectionContainer>
  );
}

export default CustomMenuSection;
