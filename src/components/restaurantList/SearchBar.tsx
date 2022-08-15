import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
// import { IoClose } from 'react-icons/io5';

// const CloseIcon = styled(IoClose)`
//   width: 30px;
//   height: 30px;
// `;

const SearchBox = styled.div`
  width: 100%;
  height: 191px;
  background: linear-gradient(
      180deg,
      rgba(65, 59, 45, 0.03) 0%,
      rgba(0, 0, 0, 0) 59.37%
    ),
    #f9f8f4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.div`
  width: 700px;
  height: 91px;
  /* background: #F2F2EC; */
  border-bottom: 2px solid #cfc7ba;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  input {
    width: 615px;
    height: 50px;
    margin-left: 15px;
    border: none;
    background: transparent;
    font-weight: 600;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: -0.02em;
    color: #000000;
  }

  input[type='search']::-webkit-search-cancel-button {
    -webkit-appearance: none;
    width: 30px;
    height: 30px;
    background-color: #f9f8f4;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23777'><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/></svg>");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 15px 15px;
    border: 2px solid #cfc7ba;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const SearchIcon = styled(FiSearch)`
  width: 30px;
  height: 30px;
  margin-left: 30px;
`;

// const SearchButton = styled.button`
//  width: 115px;
// height: 56px;
//   background: #F2F2EC;
// border: 2px solid #B1A48E;
// border-radius: 5px;
// font-weight: 600;
// font-size: 22px;
// line-height: 26px;
// letter-spacing: -0.02em;

// color: #564D3E;

// `;

function SearchBar() {
  return (
    <SearchBox>
      <SearchInput>
        <SearchIcon />
        <input type='search' spellCheck='false' />
      </SearchInput>
    </SearchBox>
  );
}

export default SearchBar;
