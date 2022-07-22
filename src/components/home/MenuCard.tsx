import React from 'react';
import styled from 'styled-components';

const MenuCardContainer = styled.div`
  width: 300px;
  height: 200px;
`;

const MenuImage = styled.img`
  width: 300px;
  height: 150px;
  background: #a4a4a4;
`;

const MenuDescription = styled.div`
  font-size: 20px;
`;

function MenuCard() {
  return (
    <MenuCardContainer>
      <MenuImage />
      <MenuDescription>1. 냉우동</MenuDescription>
    </MenuCardContainer>
  );
}

export default MenuCard;
