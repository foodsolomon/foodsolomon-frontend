import React from 'react';
import styled from 'styled-components';
import SearchFilter from './SearchFilter';

const SearchFilterContainer = styled.div`
  width: 1140px;
  display: flex;
  justify-content: flex-start;
  /* margin-top: 80px; */
  /* border: 1px solid green; */
`;

function SearchFilterBox() {
  return (
    <SearchFilterContainer>
      <SearchFilter />
      <SearchFilter />
      <SearchFilter />
    </SearchFilterContainer>
  );
}

export default SearchFilterBox;
