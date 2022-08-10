import React from 'react';
import styled from 'styled-components';
import soup from '../../images/soup.png';

const MovingImagesContainer = styled.section`
  width: 100%;
  height: 588px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const MovingImagesWrapper = styled.div`
  width: 5000px;
  height: 428px;
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: 1fr 1fr;
  row-gap: 20px;
  column-gap: 30px;
`;
interface ImageBoxProps {
  image?: string;
}

const ImageBox = styled.div<ImageBoxProps>`
  /* border: 1px solid blue; */
  width: 204px;
  height: 204px;
  background: #f2f2ec;
  border-radius: 10px;
  display: flex;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  justify-content: center;
  align-items: center;
  animation: textLoop 2s linear infinite;
  @keyframes textLoop {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(-110%, 0, 0);
      transform: translate3d(-110%, 0, 0);
    }
  }
`;

const FoodSolomonText = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #08a159;
  transform: rotate(-45deg);
  /* border: 1px solid red; */
`;

function MovingImages() {
  return (
    <MovingImagesContainer>
      <MovingImagesWrapper>
        <ImageBox>
          <FoodSolomonText>@foodsolomon</FoodSolomonText>
        </ImageBox>
        <ImageBox image={soup} />
        <ImageBox>
          <FoodSolomonText>@foodsolomon</FoodSolomonText>
        </ImageBox>
        <ImageBox image={soup} />
        <ImageBox>
          <FoodSolomonText>@foodsolomon</FoodSolomonText>
        </ImageBox>
        <ImageBox image={soup} />
        <ImageBox>
          <FoodSolomonText>@foodsolomon</FoodSolomonText>
        </ImageBox>
        <ImageBox image={soup} />
        <ImageBox>
          <FoodSolomonText>@foodsolomon</FoodSolomonText>
        </ImageBox>
        <ImageBox image={soup} />
        <ImageBox image={soup} />
        <ImageBox>
          <FoodSolomonText>@foodsolomon</FoodSolomonText>
        </ImageBox>
        <ImageBox image={soup} />
        <ImageBox>
          <FoodSolomonText>@foodsolomon</FoodSolomonText>
        </ImageBox>
        <ImageBox image={soup} />
        <ImageBox>
          <FoodSolomonText>@foodsolomon</FoodSolomonText>
        </ImageBox>
        <ImageBox image={soup} />
        <ImageBox>
          <FoodSolomonText>@foodsolomon</FoodSolomonText>
        </ImageBox>
        <ImageBox image={soup} />
        <ImageBox>
          <FoodSolomonText>@foodsolomon</FoodSolomonText>
        </ImageBox>
      </MovingImagesWrapper>
    </MovingImagesContainer>
  );
}

export default MovingImages;
