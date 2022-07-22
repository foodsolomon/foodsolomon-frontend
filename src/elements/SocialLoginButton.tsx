import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SocialLoginButtonBox = styled.button`
  width: 424px;
  height: 78px;
  border: none;
  font-size: 24px;
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
