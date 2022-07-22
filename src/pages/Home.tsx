import React from 'react';
import styled from 'styled-components';
import CustomMenuSection from '../components/home/CustomMenuSection';
import MenuRenderingSection from '../components/home/MenuRenderingSection';

const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;
function Home() {
  return (
    <HomeContainer>
      <CustomMenuSection />
      <MenuRenderingSection title='12월 30일 점심 많이 선택된 메뉴 TOP 3' />
      <MenuRenderingSection title='내 취향 맞춤 메뉴 TOP 3' />
      <MenuRenderingSection title='기분 맞춤 메뉴 TOP 3' />
      <MenuRenderingSection title='날씨 맞춤 메뉴 TOP 3' />
    </HomeContainer>
  );
}

export default Home;
