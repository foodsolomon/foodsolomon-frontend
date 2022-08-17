import React, { useState } from 'react';
import styled from 'styled-components';
import MoodStart from '../components/moodSelect/MoodStart';
import MoodSelect from '../components/moodSelect/MoodSelect';

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

const MoodSelectPage = () => {
  const [start, setStart] = useState(false);

  return (
    <Container>
      {!start ? <MoodStart setStart={setStart} /> : <MoodSelect />}
    </Container>
  );
};

export default MoodSelectPage;
