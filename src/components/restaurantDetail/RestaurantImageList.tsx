import React from 'react';
import styled from 'styled-components';

const ImageCard = styled.div`
  background: #a4a4a4;
  border-radius: 10px;
`;

const ImageContainer = styled.section`
  width: 100%;
  height: 422px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
`;

const ImageWrapper = styled.div`
  width: 1140px;
  height: 362px;
  /* border: 1px solid blue; */
  display: grid;
  gap: 30px;
  grid-template-columns: 750px 165px 165px;
  grid-template-rows: 166px 166px;
  ${ImageCard}:first-child {
    grid-row: 1 / 3;
  }
`;

function RestaurantImageList() {
  return (
    <ImageContainer>
      <ImageWrapper>
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </ImageWrapper>
    </ImageContainer>
  );
}

export default RestaurantImageList;
