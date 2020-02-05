import React from 'react';
import styled from 'styled-components';

const Welcome = () => {

  return (
    <WelcomeSection>
      <p>
        Hello It's me!
      </p>
    </WelcomeSection>
  );
};

export default Welcome;


const WelcomeSection = styled.section`
  width: 100vw;
  height: 100vh;
`;