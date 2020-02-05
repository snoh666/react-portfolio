import React from 'react';
import styled from 'styled-components';

const Header = () => {

  return (
    <StyledHeader>
      <p>
        Hello world with styled header
      </p>
    </StyledHeader>
  );
}


export default Header;


const StyledHeader = styled.header`
  width: 100vw;
  height: 50px;
  position: sticky;
`;