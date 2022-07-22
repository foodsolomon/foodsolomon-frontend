import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/restaurantList/SearchBar';
import SearchDescription from '../components/restaurantList/SearchDescription';
import SearchFilterBox from '../components/restaurantList/SearchFilterBox';
import RestaurantList from '../components/restaurantList/RestaurantList';

const RestaurantListPageContainer = styled.main`
  height: 1000px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;

function RestaurantListPage() {
  return (
    <RestaurantListPageContainer>
      <SearchBar />
      <SearchDescription />
      <SearchFilterBox />
      <RestaurantList />
    </RestaurantListPageContainer>
  );
}

export default RestaurantListPage;
