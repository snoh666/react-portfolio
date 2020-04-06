import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import StyledContainer from './styled/StyledContainer';
import SectionTitle from './styled/SectionTitle';
import { connect } from 'react-redux';
import { setAboutRef } from '../redux/actions';

function About({ setAboutRef }) {
  const aboutRef = useRef();

  useEffect(() => {
    setAboutRef(aboutRef);
  });

  return (
    <StyledContainer ref={aboutRef}>
      <SectionTitle>
        <span>About me</span>
      </SectionTitle>
      <AboutDescription>
        <p>
          I'm a 19 years old front-end developer with big ambitions. Half a year
          ago I started freelancing with development of responsive Wordpress
          themes. Between projects I focus on polishing my skills and developing
          new ones with React and Vue. In the near future I’m planning to get a
          full time job as I’m ending my school in May.
        </p>
      </AboutDescription>
    </StyledContainer>
  );
}

export default connect(null, { setAboutRef })(About);

const AboutDescription = styled.div`
  max-width: 870px;
  padding: 0 15px;
  margin: 15px auto;
  text-align: center;

  p {
    line-height: 1.25em;
    letter-spacing: 2px;
    font-weight: 400;
    color: ${props => props.theme.blue};
  }
`;
