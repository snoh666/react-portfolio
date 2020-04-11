import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { setProjectsRef } from '../redux/actions';

import styled from 'styled-components';
import StyledContainer from './styled/StyledContainer';
import SectionTitle from './styled/SectionTitle';
import UnderlinedSpan from './styled/UnderlinedSpan';

import { ReactComponent as DesktopIcon } from './svg/desktop.svg';
import { ReactComponent as GithubIcon } from './svg/github.svg';

function Projects({ setProjectsRef }) {
  const projectsRef = useRef();

  useEffect(() => {
    setProjectsRef(projectsRef);
  });

  return (
    <StyledContainer ref={projectsRef}>
      <SectionTitle>
        <span>Projects</span>
      </SectionTitle>

      <ProjectsWrapper>
        <ProjectContainer>
          <ProjectHeader>
            <h3>
              <UnderlinedSpan>Marek Belka</UnderlinedSpan>
            </h3>
            <ProjectLinks>
              <a
                href='http://marekbelka.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <DesktopIcon />
              </a>
            </ProjectLinks>
          </ProjectHeader>
          <p>
            One of first commercial projects i've made. It was possible cause of
            contacts gained throught friends and etc. Maybe desing and etc arent
            that much great but I'm really proud of this site by being my first
            commercial project.
          </p>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectHeader>
            <h3>
              <UnderlinedSpan>Generator Pomysłów</UnderlinedSpan>
            </h3>
            <ProjectLinks>
              <a
                href='https://generatorpomyslow.pl/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <DesktopIcon />
              </a>
            </ProjectLinks>
          </ProjectHeader>
          <p>
            I made subpage template and new menu with GSAP for new trainings
            campain while working with already coded home page and etc. Menu was
            based on provided by client site with menu which he liked fore
            reference
          </p>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectHeader>
            <h3>
              <UnderlinedSpan>Magazyn Bieganie</UnderlinedSpan>
            </h3>
            <ProjectLinks>
              <a
                href='https://www.magazynbieganie.pl/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <DesktopIcon />
              </a>
            </ProjectLinks>
          </ProjectHeader>
          <p>
            Created whole layout from scratch with psd file. Site was preapred
            for a lot of user per month
          </p>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectHeader>
            <h3>
              <UnderlinedSpan>Tellonym with React</UnderlinedSpan>
            </h3>
            <ProjectLinks>
              <a
                href='https://github.com/snoh666/anon-ask-react'
                target='_blank'
                rel='noopener noreferrer'
              >
                <GithubIcon />
              </a>
            </ProjectLinks>
          </ProjectHeader>
          <p>
            Clone of tellonym created with React and headless firebase database
            storage. Planned to use as replacement for tellonym with spotted fan
            page.
          </p>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectHeader>
            <h3>
              <UnderlinedSpan>Sleep cycle calculator</UnderlinedSpan>
            </h3>
            <ProjectLinks>
              <a
                href='https://github.com/snoh666/sleep-cycle-calculator'
                target='_blank'
                rel='noopener noreferrer'
              >
                <GithubIcon />
              </a>
            </ProjectLinks>
          </ProjectHeader>
          <p>
            Faster and rebuilded in react version of original site. I was using
            it and had some things i would done in other way so there it is. In
            my opinion faster and easier in use.
          </p>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectHeader>
            <h3>
              <UnderlinedSpan>E Diary - School</UnderlinedSpan>
            </h3>
            <ProjectLinks>
              <a
                href='https://www.youtube.com/watch?v=eBx8c8nkWWo'
                target='_blank'
                rel='noopener noreferrer'
              >
                <DesktopIcon />
              </a>
              <a
                href='https://github.com/snoh666/sleep-cycle-calculator'
                target='_blank'
                rel='noopener noreferrer'
              >
                <GithubIcon />
              </a>
            </ProjectLinks>
          </ProjectHeader>
          <p>
            Created as class project in my school, created over skills and level
            required in class. REST API written with php. Of course there are
            some mistakes, that i would change but with lack of time i cant for
            now.
          </p>
        </ProjectContainer>
      </ProjectsWrapper>
    </StyledContainer>
  );
}

export default connect(null, { setProjectsRef })(Projects);

const ProjectsWrapper = styled.div`
  width: 100%;
  margin: 40px auto;
  padding: 0 30px;

  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-around;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

const ProjectContainer = styled.div`
  flex: 1 1 500px;
  min-width: 50%;
  padding: 30px;

  @media (max-width: 1200px) {
    flex: 1 1 320px;
  }

  p {
    color: ${props => props.theme.blue};
    letter-spacing: 1.5px;
    line-height: 1.25em;
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  h3 {
    margin: 30px 0;
    span {
      color: ${props => props.theme.white};
    }
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    position: relative;
    padding: 2.5px;

    &:hover {
      svg path {
        fill: ${props => props.theme.blue};
      }
    }
  }

  svg {
    width: 30px;
    height: 30px;
    margin: 0 5px;
    path {
      fill: ${props => props.theme.white};
      transition: fill 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
  }
`;
