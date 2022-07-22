import React from 'react';
import styled from 'styled-components';
import RestaurantImageList from '../components/restaurantDetail/RestaurantImageList';
import RestaurantDescription from '../components/restaurantDetail/RestaurantDescription';
import RestaurantInformation from '../components/restaurantDetail/RestaurantInformation';

const RestaurantDetailPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`;

function RestaurantDetailPage() {
  return (
    <RestaurantDetailPageContainer>
      <RestaurantImageList />
      <RestaurantDescription />
      <RestaurantInformation />
    </RestaurantDetailPageContainer>
  );
}

export default RestaurantDetailPage;
