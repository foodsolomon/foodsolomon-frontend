import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import useOutsideClick from '../../hooks/useOutsideClick';

const SearchFilterContainer = styled.div`
  width: fit-content;
  height: 42px;
  margin-right: 15px;
`;

const DropdownMenu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: fit-content;
  height: 42px;
  background: #f9f8f4;
  border: 2px solid #cfc7ba;
  border-radius: 5px;
  padding: 12px 15px;
`;

const ArrowDownIcon = styled(IoIosArrowDown)`
  margin-left: 3px;
`;

const DropdownOption = styled.div<DropdownOptionProps>`
  width: fit-content;
  height: 120px;
  position: absolute;
  top: 45px;
  background: #f9f8f4;
  border: 2px solid #cfc7ba;
  border-radius: 5px;
`;

const DropdownOptions = styled.div`
  width: fit-content;
  height: 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  z-index: 100;
  padding: 12px 24px;
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
          <ArrowDownIcon />
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
