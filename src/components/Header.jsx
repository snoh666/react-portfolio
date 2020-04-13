import React from 'react';
import styled from 'styled-components';
import StyledButton from './styled/StyledButton';
import { connect } from 'react-redux';
import { getRefs } from '../redux/actions';

const Header = ({ isLoaded, sections }) => {
  const { welcome, about, projects, contact } = sections;
  const logo = 'Snoh Co.';

  return (
    <StyledHeader className={isLoaded ? 'active' : null}>
      <StyledLogo>
        <h2>
          <StyledButton
            onClick={
              welcome
                ? _ =>
                    welcome.current.scrollIntoView({
                      block: 'start',
                      behavior: 'smooth',
                    })
                : null
            }
          >
            <span>{logo}</span>
          </StyledButton>
        </h2>
      </StyledLogo>
      <StyledList>
        <li>
          <StyledButton
            onClick={
              about
                ? _ =>
                    about.current.scrollIntoView({
                      block: 'start',
                      behavior: 'smooth',
                    })
                : null
            }
          >
            <span>About</span>
          </StyledButton>
        </li>
        <li>
          <StyledButton
            onClick={
              projects
                ? _ =>
                    projects.current.scrollIntoView({
                      block: 'start',
                      behavior: 'smooth',
                    })
                : null
            }
          >
            <span>Projects</span>
          </StyledButton>
        </li>
        <li>
          <StyledButton
            onClick={
              contact
                ? _ =>
                    contact.current.scrollIntoView({
                      block: 'start',
                      behavior: 'smooth',
                    })
                : null
            }
          >
            <span>Contact</span>
          </StyledButton>
        </li>
      </StyledList>
    </StyledHeader>
  );
};

export default connect(getRefs, null)(Header);

const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  padding: 0 5%;

  position: fixed;
  z-index: 100;
  display: flex;

  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-weight: 300;
  }

  transform: translateY(-105%);
  transform-origin: 0 0;
  opacity: 0;

  transition: transform 0.4s cubic-bezier(0.4, 0, 1, 1) 1s,
    opacity 0.3s cubic-bezier(0.4, 0, 1, 1) 1s;

  &.active {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledLogo = styled.div`
  min-width: 20%;
  max-width: 50%;
`;

const StyledList = styled.ul`
  list-style: none;
  min-width: 30%;
  max-width: 50%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  li {
    margin: 0 15px;
  }

  @media (max-width: 1200px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
