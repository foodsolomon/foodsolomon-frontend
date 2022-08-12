import React from 'react';
import styled from 'styled-components';

const SearchDescriptionBox = styled.section`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
const SearchDescriptionText = styled.p`
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #413b2d;
  margin-bottom: 30px;
`;

function SearchDescription() {
  return (
    <SearchDescriptionBox>
      <SearchDescriptionText>
        검색하신 키워드 &apos;포케&apos;에 대한 식당 리스트를 보여드려요.
      </SearchDescriptionText>
    </SearchDescriptionBox>
  );
}

export default SearchDescription;
