import React from 'react';
import styled from 'styled-components';

const ImageCard = styled.div`
  background: #a4a4a4;
`;

const ImageContainer = styled.section`
  width: 1400px;
  display: grid;
  justify-content: center;
  gap: 5px;
  grid-template-columns: 3fr 1fr 1fr;
  grid-template-rows: 200px 200px;
  ${ImageCard}:first-child {
    grid-row: 1 / 3;
  }
  margin: 30px 0;
`;

function RestaurantImageList() {
  return (
    <ImageContainer>
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
    </ImageContainer>
  );
}

export default RestaurantImageList;
