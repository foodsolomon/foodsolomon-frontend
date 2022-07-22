import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 320px;
  height: 320px;
`;

const CardImage = styled.img`
  width: 320px;
  height: 200px;
  background: #a4a4a4;
`;

const CardText = styled.div`
  line-height: 25px;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
`;

const CardDescription = styled.span`
  font-size: 15px;
`;

function RestaurantCard() {
  return (
    <CardContainer>
      <CardImage />
      <CardText>
        <CardTitle>슬로우캘리 연남본점</CardTitle>
        <CardDescription>연남동 아시안</CardDescription>
      </CardText>
    </CardContainer>
  );
}

export default RestaurantCard;
