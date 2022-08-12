import React from 'react';
import styled from 'styled-components';
import RestaurantCard from './RestaurantCard';
import SearchFilterBox from './SearchFilterBox';
import Pagination from './Pagination';

const ListContainer = styled.div`
  width: 1140px;
  height: 1888px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  row-gap: 30px;
  column-gap: 30px;
  margin-top: 30px;
`;

function RestaurantList() {
  return (
    <ListContainer>
      <SearchFilterBox />
      <GridContainer>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </GridContainer>
      <Pagination />
    </ListContainer>
  );
}

export default RestaurantList;
