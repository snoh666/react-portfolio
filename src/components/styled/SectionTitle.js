import styled from 'styled-components';

const SectionTitle = styled.h2`
  color: ${props => props.theme.white};
  text-align: center;
  margin: 40px 0;
  font-weight: 300;
  font-size: 1.75rem;

  span {
    position: relative;
    padding-bottom: 2.5px;

    &::after {
      content: '';
      position: absolute;
      display: block;

      width: 80%;
      height: 1px;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);

      background: ${props => props.theme.white};
    }
  }
`;

export default SectionTitle;
