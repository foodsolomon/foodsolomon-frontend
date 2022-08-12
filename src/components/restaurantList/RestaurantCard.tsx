import React from 'react';
import styled from 'styled-components';
import { FiBookmark } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

const CardContainer = styled.div`
  width: 204px;
  height: 272px;
`;

const CardImage = styled.div`
  width: 204px;
  height: 204px;
  border-radius: 10px;
  background: lightgrey;
`;

const CardInformation = styled.div`
  width: 204px;
  height: 53px;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const CardText = styled.div`
  width: fit-content;
  height: 53px;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
`;

const CardDescription = styled.p`
  width: fit-content;
  height: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 15px;
  letter-spacing: -0.02em;
  color: #000000;
  p > span {
    margin-right: 5px;
  }
`;

const StarIcon = styled(FaStar)`
  color: #f0d256;
  width: 20px;
  height: 20px;
  margin-right: 5px;
  /* border: 1px solid red; */
`;

const BookmarkIcon = styled(FiBookmark)`
  width: 24px;
  height: 24px;
`;

function RestaurantCard() {
  return (
    <CardContainer>
      <CardImage />
      <CardInformation>
        <CardText>
          <CardTitle>슬로우캘리 연남본점</CardTitle>
          <CardDescription>
            <StarIcon />
            <p>
              <span>4.3</span>
              연남, 아시안
            </p>
          </CardDescription>
        </CardText>
        <BookmarkIcon />
      </CardInformation>
    </CardContainer>
  );
}

export default RestaurantCard;
