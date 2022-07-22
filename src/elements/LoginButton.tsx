import React from 'react';
import styled from 'styled-components';

const LoginBtn = styled.button`
  background: black;
  color: white;
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface LoginButtonProps {
  onClick: () => void;
}

function LoginButton({ onClick }: LoginButtonProps) {
  return <LoginBtn onClick={onClick}>로그인</LoginBtn>;
}

export default LoginButton;
