import React from 'react';
import styled from 'styled-components';
import SectionTitle from './styled/SectionTitle';

function About() {

  return (
    <AboutWrapper>
      <SectionTitle>
        <span>About me</span>
      </SectionTitle>
      <div>
        <p>
          I'm a 19 years old front-end developer with big ambitions.
          Half a year ago I started freelancing with developing responsive Wordpress themes.
          Between projects I focus on polishing my skills and developing new ones with React and Vue.
          In the near future I’m planning to get a full time job as I’m ending my school in May.
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