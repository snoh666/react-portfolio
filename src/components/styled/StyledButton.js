import styled from 'styled-components';

const StyledButton = styled.button`
  font-family: ${props => props.theme.Roboto};
  font-weight: 300;

  padding: .2rem 2rem;

  font-size: 18px;
  line-height: 24px;
  text-transform: uppercase;

  color: ${props => props.theme.white};
  background-color: transparent;

  border: none;
  cursor: pointer;

  position: relative;
  overflow: hidden;

  &::before, &::after {
    content: '';
    display: block;

    width: 100%;
    height: 1px;

    position: absolute;

    background-color: ${props => props.theme.white};

    transition: transform .2s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  span {
    &::before,
    &::after {
      content: '';
      display: block;

      width: 1px;
      height: 100%;

      position: absolute;

      background-color: ${props => props.theme.white};

      transition: transform .4s cubic-bezier(0.075, 0.82, 0.165, 1) .2s;
    }

    &::before {
      top: 0;
      left: 0;

      transform: translateY(105%);
    }

    &::after {
      bottom: 0;
      right: 0;

      transform: translateY(-105%);
    }
  }

  &::before {
    top: 0;
    left: 0;

    transform: translateX(-105%);
  }

  &::after {
    bottom: 0;
    right: 0;

    transform: translateX(105%);
  }

  &:hover {
    span::before,
    span::after,
    &::before,
    &::after {
      transform: translateX(0);
    }
  }
`;

export default StyledButton;