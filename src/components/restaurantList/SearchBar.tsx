import React from 'react';
import styled from 'styled-components';

const SearchBox = styled.div`
  width: 1300px;
  height: 100px;
  background: #a4a4a4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 1100px;
  height: 30px;
`;

const SearchButton = styled.button`
  width: 100px;
  height: 38px;
  font-size: 15px;
  margin-left: 5px;
  border: none;
`;

function SearchBar() {
  return (
    <SearchBox>
      <SearchInput />
      <SearchButton>검색하기</SearchButton>
    </SearchBox>
  );
}

export default SearchBar;
