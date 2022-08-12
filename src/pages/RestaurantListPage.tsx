import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/restaurantList/SearchBar';
import SearchDescription from '../components/restaurantList/SearchDescription';
import RestaurantList from '../components/restaurantList/RestaurantList';

const RestaurantListPageContainer = styled.main`
  height: 2209px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
`;

function RestaurantListPage() {
  return (
    <RestaurantListPageContainer>
      <SearchBar />
      <SearchDescription />
      <RestaurantList />
    </RestaurantListPageContainer>
  );
}

export default RestaurantListPage;
