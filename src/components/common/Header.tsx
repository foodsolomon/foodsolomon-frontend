import React, { useState } from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import foodSolomonLogo from '../../images/foodSolomonLogo.png';
import ModalContainer from '../modal/ModalContainer';
import ModalPortals from '../modal/ModalPortals';

const MainHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 150px;
  background: #f2efe5;
  z-index: 100;
`;

const HeaderTop = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopWrapper = styled.div`
  width: 1140px;
  height: 37px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLogo = styled.img.attrs({
  src: `${foodSolomonLogo}`,
  alt: '로고',
})``;

const HeaderSearchBar = styled(FiSearch)`
  width: 27.28px;
  height: 27.28px;
`;

const HeaderBottom = styled.nav`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuList = styled.ul`
  width: 332px;
  height: 21px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuItem = styled.li`
  cursor: pointer;
`;

function Header() {
  const [loginModal, setLoginModal] = useState(false);

  const openModal = () => {
    setLoginModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setLoginModal(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <MainHeader>
      <HeaderTop>
        <TopWrapper>
          <HeaderLogo />
          <HeaderSearchBar />
        </TopWrapper>
      </HeaderTop>
      <HeaderBottom>
        <MenuList>
          <MenuItem>HOME</MenuItem>
          <MenuItem>ABOUT</MenuItem>
          <MenuItem onClick={openModal}>LOGIN</MenuItem>
        </MenuList>
      </HeaderBottom>
      {loginModal && (
        <ModalPortals>
          <ModalContainer close={closeModal} />
        </ModalPortals>
      )}
    </MainHeader>
  );
}

export default Header;
