import React from 'react';
import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs';

const CustomMenuSectionContainer = styled.section`
  width: 100%;
  height: 806px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid orange; */
`;

const WelcomeArticle = styled.article`
  width: 1140px;
  height: 332px;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const WelcomeText = styled.div`
  width: 573px;
  height: 184px;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
    letter-spacing: -0.02em;
    color: #292b32;
    span:first-child {
      display: inline-block;
      width: 188px;
      height: 64px;
      background: #f1d3d5;
      color: #f35c1b;
      border-radius: 10px;
      /* display: flex; */
      text-align: center;
    }
    span:last-child {
      display: inline-block;
      width: 188px;
      height: 64px;
      background: #f35c1b;
      color: #f0d256;
      border-radius: 10px;
      /* display: flex; */
      text-align: center;
      margin-top: 15px;
    }
  }
  h2 {
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: -0.02em;
    color: #292b32;
  }
`;

const SearchMoreButton = styled.button`
  width: 107px;
  height: 38px;

  background: #f2f1e5;
  /* grey/6 */

  border: 2px solid #292b32;
  border-radius: 5px;
  margin-top: 30px;
`;

const CustomizedMenuArticle = styled.article`
  width: 100%;
  height: 474px;
  /* border: 1px solid blue; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomizedMenuWrapper = styled.div`
  width: 1140px;
  height: 364px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuBox = styled.div`
  width: 350px;
  height: 359px;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MenuImageBox = styled.div`
  width: 100%;
  height: 320px;
  /* border: 1px solid blue; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuImage = styled.div`
  width: 219px;
  height: 210px;
  background: grey;
`;

const MenuChooseButton = styled.button`
  width: 177px;
  height: 44px;
  background: #f1d3d5;
  border: 2px solid #292b32;
  border-radius: 5px;
`;

function CustomMenuSection() {
  return (
    <CustomMenuSectionContainer>
      <WelcomeArticle>
        <WelcomeText>
          <h1>
            오늘도
            <span>메뉴고민</span>
            하는 당신에게
            <span>찰떡메뉴</span>를 찾아드려요
          </h1>
          <h2>
            기분, 취향, 날씨를 기반으로 메뉴와 마포구의 식당을 추천드려요.
          </h2>
        </WelcomeText>
        <SearchMoreButton>
          더 알아보기
          <BsArrowRight />
        </SearchMoreButton>
      </WelcomeArticle>
      <CustomizedMenuArticle>
        <CustomizedMenuWrapper>
          <MenuBox>
            <MenuImageBox>
              <MenuImage> </MenuImage>
            </MenuImageBox>
            <MenuChooseButton>
              기분 맞춤 메뉴 고르기
              <BsArrowRight />
            </MenuChooseButton>
          </MenuBox>
          <MenuBox>
            <MenuImageBox>
              <MenuImage> </MenuImage>
            </MenuImageBox>
            <MenuChooseButton style={{ background: '#F2F1E5' }}>
              취향 맞춤 메뉴 고르기
              <BsArrowRight />
            </MenuChooseButton>
          </MenuBox>
          <MenuBox>
            <MenuImageBox>
              <MenuImage> </MenuImage>
            </MenuImageBox>
            <MenuChooseButton style={{ background: '#F2F1E5' }}>
              날씨 맞춤 메뉴 고르기
              <BsArrowRight />
            </MenuChooseButton>
          </MenuBox>
        </CustomizedMenuWrapper>
      </CustomizedMenuArticle>
    </CustomMenuSectionContainer>
  );
}

export default CustomMenuSection;
