import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SocialLoginButtonBox = styled.button`
  border: none;
  font-size: 24px;
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;

interface SocialLoginButtonProps {
  sns: string;
  onClick?: () => void;
}

function SocialLoginButton({ sns, onClick }: SocialLoginButtonProps) {
  return (
    <SocialLoginButtonBox onClick={onClick}>
      {sns}로 로그인
    </SocialLoginButtonBox>
  );
}

SocialLoginButton.propTypes = {
  sns: PropTypes.string,
};

SocialLoginButton.defaultProps = {
  sns: PropTypes.string.isRequired,
  onClick: null,
};

export default SocialLoginButton;
