import React from 'react';
import styled from 'styled-components';

const RestaurantDescriptionContainer = styled.section`
  width: 1400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const RestaurantTitle = styled.h2`
  font-size: 25px;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const RestaurantDesc = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
`;

function RestaurantDescription() {
  return (
    <RestaurantDescriptionContainer>
      <RestaurantTitle>슬로우캘리 연남본점</RestaurantTitle>
      <RestaurantDesc>
        그들의 가치를 오직 있으랴? 너의 목숨을 영락과 천고에 밥을 미묘한 굳세게
        그들의 이것이다.
      </RestaurantDesc>
      <RestaurantDesc>
        그러므로 얼음과 길지 불어 위하여서. 피는 용감하고 인생에 역사를 것이다.
        구할 기관과 끓는 모래뿐일 철환하였는가?
      </RestaurantDesc>
      <RestaurantDesc>
        장식하는 생생하며, 희망의 구할 두손을 이상을 돋고, 있는가?
      </RestaurantDesc>
    </RestaurantDescriptionContainer>
  );
}

export default RestaurantDescription;
