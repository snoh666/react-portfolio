import styled from 'styled-components';

const UnderlinedSpan = styled.span`
  position: relative;
  color: ${props => props.theme.grey};
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

    background: ${props => props.theme.grey};
  }
`;

export default UnderlinedSpan;