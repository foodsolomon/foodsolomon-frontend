import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LargeText = styled.div`
  font-size: 48px;
  font-weight: bold;
`;

interface TextProps {
  margin: boolean;
}

const StandardText = styled.div<TextProps>`
  margin: ${({ margin }) => margin && '10px 0 60px 0'};
`;

const RowBox = styled.div`
  display: flex;
  align-items: center;
`;

const NumberBox = styled.div`
  width: 26px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  border-radius: 5px;
  font-weight: bold;
  color: #564e3e;
  background-color: #e9e7dd;
`;

const DescriptionBox = styled.div`
  width: 750px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 43px 0;
  border-radius: 10px;
  background-color: #f9f8f4;
`;

const Button = styled.div`
  width: 168px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 95px;
  border-radius: 5px;
  font-size: 22px;
  font-weight: 600;
  cursor: pointer;
  border: 2px solid #cfc7ba;
  background-color: #f9f8f4;
`;

interface Props {
  setStart: (e: boolean) => void;
}

const MoodStart = ({ setStart }: Props) => {
  return (
    <Container>
      <LargeText>mood</LargeText>
      <StandardText margin>내 기분에 어울리는 메뉴 고르기</StandardText>
      <DescriptionBox>
        <RowBox>
          <NumberBox>1</NumberBox>
          <StandardText margin={false}>
            현재 당신의 기분을 선택해주세요.
          </StandardText>
        </RowBox>
        <RowBox>
          <NumberBox>2</NumberBox>
          <StandardText margin={false}>
            기분에 어울리는 메뉴를 추천해 드려요.
          </StandardText>
        </RowBox>
        <RowBox>
          <NumberBox>3</NumberBox>
          <StandardText margin={false}>
            원하는 메뉴를 선택하면 맛집 페이지로 이동해요.
          </StandardText>
        </RowBox>
      </DescriptionBox>
      <Button onClick={() => setStart(true)}>시작하기</Button>
    </Container>
  );
};

export default MoodStart;
