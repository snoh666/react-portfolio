import React from 'react';
import styled from 'styled-components';
import UnderlinedSpan from './styled/UnderlinedSpan';

function Footer() {
  return (
    <StyledFooter>
      <FooterItem>
        <StyledParagraph>
          <UnderlinedSpan>This web app is progressive!</UnderlinedSpan>
        </StyledParagraph>
        <p>
          It means that you can install it as standalone application to view
          offline on mobile and desktop devices!{' '}
          <a
            class='a--inline-block'
            href='https://medium.com/progressivewebapps/how-to-install-a-pwa-to-your-device-68a8d37fadc1'
            rel='noreferrer noopener'
          >
            <UnderlinedSpan>How to install pwa?</UnderlinedSpan>
          </a>
        </p>
      </FooterItem>
      <FooterItem textAlign='end'>
        <p>
          Created by <UnderlinedSpan>me</UnderlinedSpan>!
        </p>
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
    padding: 30px 15px;
  }

  @media (max-width: 560px) {
    flex-flow: column nowrap;
    justify-content: center;
  }

  a {
    text-decoration: none;
    &.a--inline-block {
      display: inline-block;
    }
  }
`;

const FooterItem = styled.div`
  max-width: 50%;
  p {
    text-align: ${props => (props.textAlign === 'end' ? 'end' : 'inherit')};
  }

  @media (max-width: 560px) {
    max-width: 100%;
    margin: 30px 0 0;
  }
`;

const StyledParagraph = styled.p`
  margin-bottom: 15px;

  span {
    color: ${props => props.theme.white};
  }
`;
