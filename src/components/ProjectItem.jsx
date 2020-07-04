import React from 'react';
import styled from 'styled-components';

import UnderlinedSpan from './styled/UnderlinedSpan';

import { ReactComponent as OpenInBrowser } from './svg/openInBrowser.svg';
import { ReactComponent as GithubIcon } from './svg/github.svg';

const ProjectItem = ({ title, description, links: { site, code } }) => {
  return (
    <ProjectContainer>
      <ProjectHeader>
        <h3>
          <UnderlinedSpan>{title}</UnderlinedSpan>
        </h3>
        <ProjectLinks>
          {site ? (
            <a
              href={site}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='checkproject'
            >
              <OpenInBrowser />
            </a>
          ) : null}
          {code ? (
            <a
              href={code}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='seecode'
            >
              <GithubIcon />
            </a>
          ) : null}
        </ProjectLinks>
      </ProjectHeader>
      <p>{description}</p>
    </ProjectContainer>
  );
};

export default ProjectItem;

const ProjectContainer = styled.div`
  flex: 1 1 500px;
  min-width: 50%;
  padding: 30px;

  @media (max-width: 1200px) {
    flex: 1 1 320px;
  }

  @media (max-width: 768px) {
    padding: 7.5px;
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
      svg {
        fill: ${props => props.theme.blue};
      }
    }
  }

  svg {
    width: 30px;
    height: 30px;
    margin: 0 5px;
    fill: ${props => props.theme.white};
    path {
      transition: fill 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
  }
`;
