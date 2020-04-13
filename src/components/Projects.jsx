import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { setProjectsRef } from '../redux/actions';

import styled from 'styled-components';
import StyledContainer from './styled/StyledContainer';
import SectionTitle from './styled/SectionTitle';

import projects from './site-content/projects';
import ProjectItem from './ProjectItem';

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
        {projects.map(project => (
          <ProjectItem
            title={project.title}
            description={project.description}
            links={project.links}
          />
        ))}
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
