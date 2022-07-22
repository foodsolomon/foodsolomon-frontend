import React from 'react';
import styled from 'styled-components';

const MyInput = styled.input<PlaceholderProps>`
  width: 424px;
  height: 66px;
  border-radius: 15px;
  border: 1px solid grey;
  font-size: 18px;
  padding-left: 25px;
`;

interface PlaceholderProps {
  placeholder: string;
}

function InputDefault({ placeholder }: PlaceholderProps) {
  return <MyInput placeholder={placeholder} />;
}

export default InputDefault;
