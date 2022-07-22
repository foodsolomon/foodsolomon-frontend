import React from 'react';
import styled from 'styled-components';
import RestaurantCard from './RestaurantCard';

const ListContainer = styled.div`
  width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

function RestaurantList() {
  return (
    <ListContainer>
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </ListContainer>
  );
}

export default RestaurantList;
