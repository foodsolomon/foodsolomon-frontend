import React from 'react';
import styled from 'styled-components';
import SearchFilter from './SearchFilter';

const SearchFilterContainer = styled.div`
  width: 1300px;
  display: flex;
  border: 1px solid grey;
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
