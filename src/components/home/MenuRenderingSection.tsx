import React from 'react';
import styled from 'styled-components';
import MenuTitle from './MenuTitle';
import MenuCard from './MenuCard';

interface MenuRenderingSectionTypes {
  title: string;
}

const MenuRenderingSectionContainer = styled.section`
  width: 1400px;
  height: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

function MenuRenderingSection({ title }: MenuRenderingSectionTypes) {
  return (
    <MenuRenderingSectionContainer>
      <MenuTitle title={title} />
      <MenuCard />
      <MenuCard />
      <MenuCard />
    </MenuRenderingSectionContainer>
  );
}

export default MenuRenderingSection;
