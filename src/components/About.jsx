import React from 'react';
import styled from 'styled-components';
import UnderlinedSpan from './styled/UnderlinedSpan';
import SectionTitle from './styled/SectionTitle';

function About() {

  return (
    <AboutWrapper>
      <SectionTitle>
        <span>About me</span>
      </SectionTitle>
      <div>
        <p>
          I'm 19 years old front-end developer with great ambitions.
          I really love building stuff with ReactJS but currently im working with wordpress themes as freelancer.
          Im also currently looking forward to get full-time job as i'm ending my school in may.
        </p>
      </div>
    </AboutWrapper>
  );
}

export default About;

const AboutWrapper = styled.div`
  width: 100%;
  max-width: 760px;
  min-height: 75vh;
  margin: 100px auto;
  text-align: center;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  p {
    line-height: 1.25em;
    letter-spacing: 2px;
    font-weight: 400;
    color: ${props => props.theme.grey};
  }
`;