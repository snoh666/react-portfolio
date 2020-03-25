import React from 'react';
import styled from 'styled-components';

import Logo from './images/logo.png';
import UnderlinedSpan from './styled/UnderlinedSpan';

const Welcome = () => {

  return (
    <WelcomeSection>
      <StyledBackgroundImage src={Logo} alt="Site Background" onLoad={e => e.target.parentElement.classList.add('active')} />
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

  &::before {
    content: '';
    position: absolute;
    display: block;

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: linear-gradient(to right, ${props => props.theme.black} 75%, transparent);
    z-index: 1;

    transform: translateX(0);
    will-change: transform;
    transition: transform 1.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  &.active::before {
    transform: translateX(-105%);
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

  &::before {
    content: '';
    display: block;

    bottom: 1.875px;
    right: 3.75px;
    width: 7.5px;
    height: 7.5px;

    position: absolute;

    border-left: 1px solid ${props => props.theme.white};
    border-bottom: 1px solid ${props => props.theme.white};

    transform: rotate(-45deg) translate(10px, -10px);
    transform-origin: 50% 50%;

    transition: transform .4s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  &::after {
    content: '';
    display: block;

    top: 0;
    right: 6px;
    width: 1px;
    height: 100%;

    position: absolute;

    background-color: ${props => props.theme.white};

    transform: translateY(-105%);
    transition: transform .4s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  &:hover {
    &::before {
      transform: rotate(-45deg) translateY(0);
    }
    &::after {
      transform: translateY(-3.75px);
    }
  }
`;