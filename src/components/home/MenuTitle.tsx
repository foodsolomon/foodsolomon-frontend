import React from 'react';
import styled from 'styled-components';

const CustomMenuTitle = styled.h2`
  width: 150px;
  font-size: 20px;
`;

function MenuTitle({ title }: any) {
  return <CustomMenuTitle>{title}</CustomMenuTitle>;
}

export default MenuTitle;
