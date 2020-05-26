import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <StyledFooter>
      <FooterItem>
        <p>This web app is progressive!</p>
        <p>
          So you can install it as standalone application to view offline on
          mobile and desktop devices!
        </p>
      </FooterItem>
      <FooterItem textAlign='end'>
        <p>Created by snoh</p>
      </FooterItem>
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.div`
  max-width: 1160px;
  width: 100%;
  margin: 0 auto 0;
  padding: 30px;

  display: flex;
  flex-flow: row nowrap;
  align-content: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0 15px;
  }

  @media (max-width: 560px) {
    flex-flow: column nowrap;
    justify-content: center;
  }
`;

const FooterItem = styled.div`
  max-width: 50%;
  p {
    margin: 15px 0;
    height: auto;
    text-align: ${props => (props.textAlign === 'end' ? 'end' : 'inherit')};
  }

  @media (max-width: 560px) {
    max-width: 100%;
    margin: 30px 0 0;
  }
`;
