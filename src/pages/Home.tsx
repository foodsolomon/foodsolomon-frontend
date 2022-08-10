import React from 'react';
import styled from 'styled-components';
import CustomMenuSection from '../components/home/CustomMenuSection';
import MenuRenderingSection from '../components/home/MenuRenderingSection';
import MovingImages from '../components/home/MovingImages';
import MovingText from '../components/home/MovingText';
import PleaseLoginSection from '../components/home/PleaseLoginSection';

const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
`;
function Home() {
  return (
    <HomeContainer>
      <CustomMenuSection />
      <MovingText />
      <MenuRenderingSection />
      <MovingText />
      <PleaseLoginSection />
      <MovingImages />
    </HomeContainer>
  );
}

export default Home;
