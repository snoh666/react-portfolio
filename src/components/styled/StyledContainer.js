import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 1160px;
  width: 100%;
  min-height: 650px;
  margin: 40px auto;
  padding: 30px;

  display: flex;
  flex-flow: column nowrap;
  align-content: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

export default StyledContainer;
