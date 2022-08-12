import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { FiArrowLeft } from 'react-icons/fi';

const MenuRenderingSectionContainer = styled.section`
  width: 100%;
  height: 978px;
  background: #f2f2ec;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const LunchBestMenuContainer = styled.article`
  width: 1140px;
  height: 369px;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MenuTextWrapper = styled.div`
  width: 205px;
  height: 109px;
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    width: 205px;
    height: 66px;
    font-weight: 600;
    font-size: 22px;
    line-height: 150%;
    letter-spacing: -0.02em;
  }

  p {
    width: 84px;
    height: 18px;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.02em;
    color: #616161;
    margin-top: 5px;
  }
`;

const MenuImagesWrapper = styled.div`
  width: 1140px;
  height: 230px;
  /* border: 1px solid green; */
  display: flex;
  justify-content: space-between;
`;

const DinnerBestMenuContainer = styled.article`
  width: 1140px;
  height: 369px;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

interface MenuTextProps {
  imageIndex: number;
}

const MenuText = styled.div<MenuTextProps>`
  width: 200px;
  height: 230px;
  background: ${(props) => {
    if (props.imageIndex === 1) {
      return '#C3E1E9';
    }
    if (props.imageIndex === 2) {
      return '#F0D256';
    }
    return '#f1d3d5';
  }};
  border-radius: 7px;
  order: ${(props) => {
    if (props.imageIndex === 1) {
      return 4;
    }
    if (props.imageIndex === 2) {
      return 6;
    }
    return 2;
  }};
  transition: all 0.3s linear;
  color: ${(props) => {
    if (props.imageIndex === 1) {
      return '#08A159';
    }
    if (props.imageIndex === 2) {
      return '#292B32';
    }
    return '#F35C1B';
  }};
`;

interface MenuImageProps {
  key: number;
}

const MenuImage = styled.div<MenuImageProps>`
  width: 283.33px;
  height: 230px;
  background: orange;
  border-radius: 7px;
  transition: all 0.3s linear;
  &:nth-child(1) {
    order: 1;
    transition: all 0.3s linear;
  }

  &:nth-child(2) {
    order: 3;
    transition: all 0.3s linear;
  }

  &:nth-child(3) {
    order: 5;
    transition: all 0.3s linear;
  }
`;

const TextWrapper = styled.div`
  width: 140px;
  height: 33px;
  margin-top: 30px;
  margin-left: 30px;
  h3 {
    font-weight: 700;
    font-size: 22px;
    line-height: 150%;
    letter-spacing: -0.02em;
  }
  p {
    font-weight: 500;
    font-size: 15px;
    line-height: 150%;
    letter-spacing: -0.02em;
    margin-top: 10px;
  }
`;

const LeftArrowIcon = styled(FiArrowLeft)`
  margin-top: 10px;
  font-weight: 600;
  font-size: 22px;
  line-height: 150%;
`;

function MenuRenderingSection() {
  const [imageIndex, setImageIndex] = useState(0);
  const foodData = [
    { ranking: 1, title: '장칼국수', content: '이열치열 매콤하게' },
    { ranking: 2, title: '새우볶음밥', content: '언제나 성공하는' },
    { ranking: 3, title: '햄버거', content: '간단하게 먹고싶다면' },
  ];

  const changeImageIndex = useCallback(
    (i: number) => {
      setImageIndex(i);
      console.log(imageIndex);
    },
    [imageIndex],
  );

  return (
    <MenuRenderingSectionContainer>
      <LunchBestMenuContainer>
        <MenuTextWrapper>
          <h3>
            <u>7월 21일 점심</u>
            <br />
            많이 선택된 메뉴 TOP 3
          </h3>
          <p>21일 2시 기준</p>
        </MenuTextWrapper>
        <MenuImagesWrapper>
          {foodData.map(({ ranking }, i) => (
            <MenuImage
              key={ranking}
              // imageIndex={imageIndex}
              onMouseEnter={() => changeImageIndex(i)}
            />
          ))}
          <MenuText imageIndex={imageIndex}>
            <TextWrapper>
              <h3>
                {imageIndex + 1}
                위.
                {foodData[imageIndex].title}
              </h3>
              <p>
                {foodData[imageIndex].content}
                <br />
                {foodData[imageIndex].title}
                &nbsp;어때요?
              </p>
              <LeftArrowIcon />
            </TextWrapper>
          </MenuText>
        </MenuImagesWrapper>
      </LunchBestMenuContainer>
      <DinnerBestMenuContainer>
        <MenuTextWrapper>
          <h3>
            <u>7월 20일 저녁</u>
            <br />
            많이 선택된 메뉴 TOP 3
          </h3>
          <p>20일 8시 기준</p>
        </MenuTextWrapper>
        <MenuImagesWrapper>
          {/* <MenuImage /> */}
          <MenuText imageIndex={imageIndex}>
            {/* <TextWrapper>
              <h3>1위. 치킨</h3>
              <p>
                매일 매일 새롭고 짜릿한
                <br />
                치킨 어때요?
              </p>
              <LeftArrowIcon />
            </TextWrapper> */}
          </MenuText>
          {/* <MenuImage imageIndex={1} /> */}
          {/* <MenuImage imageIndex={2} /> */}
        </MenuImagesWrapper>
      </DinnerBestMenuContainer>
    </MenuRenderingSectionContainer>
  );
}

export default MenuRenderingSection;
