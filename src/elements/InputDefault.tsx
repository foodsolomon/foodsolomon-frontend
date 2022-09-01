import React from 'react';
import styled from 'styled-components';

const MyInput = styled.input<PlaceholderProps>`
  width: 424px;
  height: 66px;
  background: #f9f8f4;
  border-radius: 10px;
  border: none;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #95866c;
  padding-left: 15px;
`;

interface PlaceholderProps {
  placeholder: string;
}

function InputDefault({ placeholder }: PlaceholderProps) {
  return <MyInput placeholder={placeholder} />;
}

export default InputDefault;
