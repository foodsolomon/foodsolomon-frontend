import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  width: 1140px;
  height: 136px;
  border: 1px solid red;
  display: flex;
  justify-content: center;
`;

const PaginationWrapper = styled.div`
  width: 171px;
  height: 26px;
  margin-top: 30px;
  border: 1px solid red;
`;

function Pagination() {
  return (
    <PaginationContainer>
      <PaginationWrapper>d</PaginationWrapper>
    </PaginationContainer>
  );
}

export default Pagination;
