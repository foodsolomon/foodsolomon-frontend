import React from 'react';
import styled from 'styled-components';

function Footer() {
  const MainFooter = styled.div`
    height: 100px;
    background: #d9d9d9;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  return <MainFooter>푸터영역</MainFooter>;
}

export default Footer;
