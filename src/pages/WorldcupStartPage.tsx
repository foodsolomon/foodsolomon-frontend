import React from 'react';
import styled from 'styled-components';
import WorldcupStart from '../components/worldcup/WorldcupStart';
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
  border: 1px solid red;
`;

const WorldcupStartPage = () => {
  return (
    <Container>
      <WorldcupStart />
    </Container>
  );
};

export default WorldcupStartPage;
