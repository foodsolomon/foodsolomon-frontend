import React, { useState } from 'react';
import styled from 'styled-components';
import LoginButton from '../../elements/LoginButton';
import ModalContainer from '../modal/ModalContainer';
import ModalPortals from '../modal/ModalPortals';

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  background: #d9d9d9;
  padding-left: 15px;
  padding-right: 15px;
  position: fixed;
`;

const MainHeaderContainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const MainLogo = styled.img`
  background: grey;
  width: 50px;
  height: 50px;
`;

const SearchBar = styled.input`
  width: 100px;
  height: 20px;
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
      <MainLogo />
      <MainHeaderContainer>
        <SearchBar />
        <LoginButton onClick={openModal} />
        {loginModal && (
          <ModalPortals>
            <ModalContainer close={closeModal} />
          </ModalPortals>
        )}
      </MainHeaderContainer>
    </MainHeader>
  );
}

export default Header;
