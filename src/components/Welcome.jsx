import React from 'react';
import styled from 'styled-components';

import Logo from './images/logo.png';
import UnderlinedSpan from './styled/UnderlinedSpan';

const Welcome = () => {

  return (
    <WelcomeSection>
      <StyledBackgroundImage src={Logo} alt="Site Background" />
        <div>
          <h1>
            Snoh co.
          </h1>
          <p style={{textAlign: 'center'}}>
            <UnderlinedSpan>Web is our space!</UnderlinedSpan>
          </p>
        </div>
      <SeeMoreWrapper>
        <SeeMoreButton>
          <span>See more..</span>
        </SeeMoreButton>
      </SeeMoreWrapper>
    </WelcomeSection>
  );
};

export default Welcome;


const WelcomeSection = styled.div`
  width: 100%;
  height: calc(100vh - 50px);

  position: relative;

  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;

  padding-left: 5%;

  h1 {
    font-size: 5.25rem;
    font-weight: 200;
  }
`;

const StyledBackgroundImage = styled.img`
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - (100vh - 100%));

  object-fit: contain;
  object-position: center;

  z-index: -1;
`;

const SeeMoreWrapper = styled.div`
  position: absolute;
  bottom: 2.5vh;
  left: 50%;
  transform: translateX(-50%);
`;

const SeeMoreButton = styled.button`
  font-family: ${props => props.theme.Roboto};
  font-weight: 300;

  padding: .2rem 2rem;

  font-size: 18px;
  line-height: 24px;
  letter-spacing: 2.5px;

  color: ${props => props.theme.white};
  background-color: transparent;

  border: none;
  cursor: pointer;

  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    display: block;

    top: 0;
    width: 1px;
    height: 100%;

    position: absolute;

    background-color: ${props => props.theme.white};

    transition: transform .4s cubic-bezier(0.075, 0.82, 0.165, 1);
  }


  &::before {
    left: 0;

    transform: translateY(-105%);
  }

  &::after {
    right: 0;

    transform: translateY(-105%);
  }

  &:hover {
    &::before,
    &::after {
      transform: translateY(0);
    }
  }
`;