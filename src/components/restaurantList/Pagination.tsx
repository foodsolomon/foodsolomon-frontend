import React from 'react';
import styled from 'styled-components';
// import {
//   RiNumber1, RiNumber2, RiNumber3, RiNumber4, RiNumber5,
// } from 'react-icons/ri';

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (value: number) => void;
}

const PaginationContainer = styled.div`
  width: 1140px;
  height: 136px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
`;

const PaginationWrapper = styled.div`
  width: 171px;
  height: 26px;
  margin-top: 30px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 17px;
  color: #95866c;
  & > * {
    cursor: pointer;
  }
`;

const PageNumber = styled.div`
  width: 45px;
  height: 46px;
`;

function Pagination({ currentPage, setCurrentPage }: PaginationProps) {
  const arr = [];
  for (let i = 0; i < currentPage; i + 1) {
    arr.push(i);
  }
  return (
    <PaginationContainer>
      <PaginationWrapper>
        {/* <RiNumber1 onClick={() => setCurrentPage(1)} /> */}
        {arr.map((pageNumber) => (
          <PageNumber
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
          >
            {pageNumber}
          </PageNumber>
        ))}
      </PaginationWrapper>
    </PaginationContainer>
  );
}

export default Pagination;
