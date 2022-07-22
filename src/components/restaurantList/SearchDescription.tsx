import React from 'react';
import styled from 'styled-components';

const SearchDescriptionBox = styled.p`
  font-size: 30px;
  font-weight: 700;
`;

function SearchDescription() {
  return (
    <SearchDescriptionBox>
      검색하신 &apos;포케&apos; 에 대한 식당 리스트입니다.
    </SearchDescriptionBox>
  );
}

export default SearchDescription;
