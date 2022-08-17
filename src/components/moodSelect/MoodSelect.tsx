import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LargeText = styled.div`
  font-size: 34px;
  font-weight: 700;
`;

const MediumText = styled.div`
  font-size: 22px;
  font-weight: 500;
  margin: 10px 0;
`;

const RowBox = styled.div`
  display: flex;
  width: 875px;
  justify-content: space-between;
  margin-top: 120px;
`;
const Image = styled.img`
  width: 225px;
  height: 225px;
  border-radius: 10px;
  background-color: lightgray;
`;

const MoodSelect = () => {
  return (
    <Container>
      <LargeText>오늘 당신의 기분은 어떠신가요?</LargeText>
      <MediumText>기분에 어울리는 음식을 추천해 드려요</MediumText>
      <RowBox>
        <Image src='' alt='화남' />
        <Image src='' alt='슬픔' />
        <Image src='' alt='기쁨' />
      </RowBox>
    </Container>
  );
};

export default MoodSelect;
