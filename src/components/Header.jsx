import React from 'react';
import styled from 'styled-components';
import StyledButton from './styled/StyledButton';

const Header = () => {

  const logo = 'Snoh Co.';

  return (
    <StyledHeader>
      <StyledLogo>
        <h2>
          {logo}
        </h2>
      </StyledLogo>
      <StyledList>
        <li>
          <StyledButton><span>About</span></StyledButton>
        </li>
        <li>
          <StyledButton><span>Offers</span></StyledButton>
        </li>
        <li>
          <StyledButton><span>Contact</span></StyledButton>
        </li>
      </StyledList>
    </StyledHeader>
  );
}


export default Header;


const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  padding: 0 5%;

  position: sticky;
  display: flex;

  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-weight: 300;
  }
`;

const StyledLogo = styled.div`
  width: 20%;
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
`;