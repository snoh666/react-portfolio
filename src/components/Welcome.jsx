import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import Logo from './images/encleadus-bg.jpg';
import UnderlinedSpan from './styled/UnderlinedSpan';
import StyledButton from './styled/StyledButton';
import { connect } from 'react-redux';
import { setWelcomeRef, getContactRef } from '../redux/actions';

const Welcome = ({ setLoaded, setWelcomeRef, contactRef }) => {
  const welcomeRef = useRef();

  useEffect(() => {
    setWelcomeRef(welcomeRef);
  });

  return (
    <WelcomeSection ref={welcomeRef}>
      <StyledBackgroundImage
        src={Logo}
        alt='Site Background'
        onLoad={e => {
          setLoaded(true);
          e.target.parentElement.classList.add('active');
        }}
      />
      <div className='welcome__title'>
        <WelcomeParagraph>
          <UnderlinedSpan>In need of</UnderlinedSpan>
        </WelcomeParagraph>
        <h2>Front-end developer?</h2>
        <WelcomeParagraph>
          <StyledButton
            onClick={
              contactRef
                ? _ =>
                    contactRef.current.scrollIntoView({
                      block: 'start',
                      behavior: 'smooth',
                    })
                : null
            }
          >
            <span>Contact me!</span>
          </StyledButton>
        </WelcomeParagraph>
      </div>
      <SeeMoreWrapper>
        <SeeMoreButton
          onClick={_ =>
            window.scrollTo({ behavior: 'smooth', top: window.innerHeight })
          }
        >
          <span>See more..</span>
        </SeeMoreButton>
      </SeeMoreWrapper>
    </WelcomeSection>
  );
};

export default connect(getContactRef, { setWelcomeRef })(Welcome);

const WelcomeSection = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  height: 100vh;
  padding: 50px 0 0 5%;

  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;

  h2 {
    font-size: 3rem;
    font-weight: 200;

    margin-bottom: 10px;

    @media (max-width: 540px) {
      text-align: center;
    }
  }

  &::before {
    content: '';
    position: fixed;
    display: block;

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: ${props => props.theme.black};
    z-index: 1;

    transform: translateX(0);
    will-change: transform;
    transition: transform 1s cubic-bezier(0.4, 0, 1, 1);
  }

  .welcome__title {
    transform: translateY(20px);
    opacity: 0;

    transition: all 0.5s cubic-bezier(0.4, 0, 1, 1) 1.2s;
  }

  &.active {
    &::before {
      transform: translateX(-105%);
    }
    .welcome__title {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const WelcomeParagraph = styled.p`
  margin-bottom: 10px;
  text-align: center;
`;

const StyledBackgroundImage = styled.img`
  position: absolute;

  top: 50px;
  left: 0;
  width: 100%;
  height: calc(100% - 3rem - 50px);

  object-fit: contain;
  object-position: 60% center;

  z-index: -1;

  @media (max-width: 1200px) {
    object-position: right center;
  }
`;

const SeeMoreWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

const SeeMoreButton = styled.button`
  font-family: ${props => props.theme.Roboto};
  font-weight: 300;
  min-width: 200px;

  padding: 0.2rem 2rem;

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

    transition: transform 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
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
    transition: transform 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
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
