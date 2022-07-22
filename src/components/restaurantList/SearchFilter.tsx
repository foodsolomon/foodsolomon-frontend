import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import useOutsideClick from '../../hooks/useOutsideClick';

const SearchFilterContainer = styled.div`
  width: 150px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DropdownMenu = styled.div`
  width: 110px;
  height: 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: lightgrey;
  border-radius: 20px;
  cursor: pointer;
`;

const DropdownOption = styled.div<DropdownOptionProps>`
  width: 110px;
  height: 120px;
  position: absolute;
  top: 45px;
  border: 1px solid grey;
  border-radius: 20px;
  background: white;
`;

const DropdownOptions = styled.div`
  width: 110px;
  height: 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  z-index: 100;
`;

const DropdownBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 1.2s linear;
  position: relative;
`;

interface DropdownOptionProps {
  ref: any;
}

function SearchFilter() {
  const [toggle, setToggle] = useState(false);
  const [dropdownText, setDropdownText] = useState('거리순');

  const outsideRef = useRef();

  const handleDropdownText = (e: any) => {
    setDropdownText(e.currentTarget.textContent);
    setToggle(false);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useOutsideClick(outsideRef, () => setToggle(false));

  return (
    <SearchFilterContainer>
      <DropdownBox>
        <DropdownMenu onClick={handleToggle}>
          {dropdownText}
          <IoIosArrowDown />
        </DropdownMenu>
        {toggle && (
          <DropdownOption ref={outsideRef}>
            <DropdownOptions onClick={handleDropdownText}>
              거리순
            </DropdownOptions>
            <DropdownOptions onClick={handleDropdownText}>
              이름순
            </DropdownOptions>
            <DropdownOptions onClick={handleDropdownText}>
              평점순
            </DropdownOptions>
          </DropdownOption>
        )}
      </DropdownBox>
    </SearchFilterContainer>
  );
}

export default SearchFilter;
