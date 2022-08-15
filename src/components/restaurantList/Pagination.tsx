import React from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
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
  width: 238px;
  height: 46px;
  margin-top: 30px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PageNumber = styled.div<{ currentPage: boolean }>`
  width: 45px;
  height: 46px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  font-size: 17px;
  color: #95866c;
  ${(props) =>
    props.currentPage &&
    css`
      font-weight: 700;
      font-size: 22px;
      color: #f35c1b;
      background: #f9f8f4;
    `}
`;

function Pagination({ currentPage, setCurrentPage }: PaginationProps) {
  const navigate = useNavigate();
  const moveToTop = () => (document.documentElement.scrollTop = 0);
  return (
    <PaginationContainer>
      <PaginationWrapper>
        <PageNumber
          currentPage={currentPage === 1}
          onClick={() => {
            setCurrentPage(1);
            navigate('?page=1');
            moveToTop();
          }}
        >
          1
        </PageNumber>
        <PageNumber
          currentPage={currentPage === 2}
          onClick={() => {
            setCurrentPage(2);
            navigate('?page=2');
            moveToTop();
          }}
        >
          2
        </PageNumber>
        <PageNumber
          currentPage={currentPage === 3}
          onClick={() => {
            setCurrentPage(3);
            navigate('?page=3');
            moveToTop();
          }}
        >
          3
        </PageNumber>
        <PageNumber
          currentPage={currentPage === 4}
          onClick={() => setCurrentPage(4)}
        >
          4
        </PageNumber>
        <PageNumber
          currentPage={currentPage === 5}
          onClick={() => setCurrentPage(5)}
        >
          5
        </PageNumber>
      </PaginationWrapper>
    </PaginationContainer>
  );
}

export default Pagination;
