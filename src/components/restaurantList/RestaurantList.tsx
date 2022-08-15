import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import RestaurantCard from './RestaurantCard';
import SearchFilterBox from './SearchFilterBox';
import Pagination from './Pagination';
import { getPagingLists } from '../../api/api';

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
  const [currentPage, setCurrentPage] = useState(1);
  // const { data } = useQuery(['myQuery'], getRestaurantLists.get);
  const { data } = useQuery(['getLists', currentPage], () =>
    getPagingLists.getListsByPaging(currentPage),
  );
  return (
    <ListContainer>
      <SearchFilterBox />
      <GridContainer>
        {data?.map((card: any) => (
          <RestaurantCard
            key={card.id}
            star={card.star}
            region={card.region}
            category={card.category}
            restaurantName={card.restaurant_name}
            imageUrl={card.image_url}
          />
        ))}
      </GridContainer>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </ListContainer>
  );
}

export default RestaurantList;
