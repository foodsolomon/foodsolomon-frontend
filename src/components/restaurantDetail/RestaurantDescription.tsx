import React from 'react';
import styled from 'styled-components';
import { BsBookmark } from 'react-icons/bs';
import { BiPencil } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';

const RestaurantDescriptionContainer = styled.section`
  width: 1140px;
  height: 212px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
  /* border: 1px solid red; */
`;

const RestaurantTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleWrapper = styled.div`
  width: 369px;
  height: 51px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-weight: 600;
    font-size: 34px;
    color: #26211a;
  }

  p {
    font-weight: 500;
    font-size: 17px;
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid blue; */
  }
`;

const StarIcon = styled(FaStar)`
  color: #f0d256;
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const ButtonsWrapper = styled.div`
  width: 285px;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid blue; */
`;

const ReviewAndBookmarkButton = styled.button`
  width: fit-content;
  height: 44px;
  background: #f9f8f4;
  border: 2px solid #cfc7ba;
  border-radius: 5px;
  font-weight: 500;
  font-size: 16px;
  color: #564e3e;
  padding: 10px 13px;
`;

const PencilIcon = styled(BiPencil)`
  width: 24px;
  height: 24px;
  margin-right: 7px;
`;

const BookmarkIcon = styled(BsBookmark)`
  width: 20px;
  height: 24px;
  margin-right: 7px;
`;

const RestaurantAddress = styled.div`
  height: 45px;
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #413b2d;
    /* border: 1px solid blue; */
    span {
      color: #08a159;
    }
  }
`;

const RestaurantOfficeHours = styled.div`
  width: 228px;
  height: 96px;
  display: flex;
  justify-content: space-between;
`;

const BusinessStatus = styled.div`
  width: fit-content;
  height: 24px;
  /* border: 1px solid red; */
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #08a159;
`;

const OfficeHours = styled.div`
  width: 180px;
  height: 96px;
  /* border: 1px solid red; */
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #413b2d;
`;

function RestaurantDescription() {
  return (
    <RestaurantDescriptionContainer>
      <RestaurantTitle>
        <TitleWrapper>
          <h1>슬로우캘리 연남본점</h1>
          <p>
            <StarIcon />
            4.2(114)
          </p>
        </TitleWrapper>
        <ButtonsWrapper>
          <ReviewAndBookmarkButton>
            <PencilIcon />
            리뷰 작성하기
          </ReviewAndBookmarkButton>
          <ReviewAndBookmarkButton>
            <BookmarkIcon />
            북마크하기
          </ReviewAndBookmarkButton>
        </ButtonsWrapper>
      </RestaurantTitle>
      <RestaurantAddress>
        <p>
          서울 마포구 동교로38길 35 2층 <br />
          홍대입구역 3번 출구에서 <span>428m</span>
        </p>
      </RestaurantAddress>
      <RestaurantOfficeHours>
        <BusinessStatus>영업중</BusinessStatus>
        <OfficeHours>
          <p>평일 10:00 ~ 20:00</p>
          <p>주말 10:00 ~ 18:00</p>
          <p>브레이크타임 16:00 ~ 17:00</p>
          <p>월요일 휴무</p>
        </OfficeHours>
      </RestaurantOfficeHours>
    </RestaurantDescriptionContainer>
  );
}

export default RestaurantDescription;
