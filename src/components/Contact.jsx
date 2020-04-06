import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { setContactRef } from '../redux/actions';

import styled from 'styled-components';
import StyledContainer from './styled/StyledContainer';
import SectionTitle from './styled/SectionTitle';

import { ReactComponent as GithubIcon } from './svg/github.svg';
import { ReactComponent as MailIcon } from './svg/gmail.svg';
import { ReactComponent as LinkedInIcon } from './svg/linkedin.svg';

const Contact = ({ setContactRef }) => {
  const contactRef = useRef();

  useEffect(() => {
    setContactRef(contactRef);
  });

  return (
    <StyledContainer ref={contactRef}>
      <SectionTitle>
        <span>Contact</span>
      </SectionTitle>
      <ContactContent>
        <p>
          You want to ask me about something?
          <br />
          Talk about a project or need evaluate one?
          <br />
          I'm open to new ideas so feel free to contact me or check out my work!
        </p>
        <SocialsIcons>
          <li>
            <a
              href='https://github.com/snoh666'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GithubIcon />
            </a>
          </li>
          <li>
            <a
              href='mailto:snochopl@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <MailIcon />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/mikołaj-snochowski-a15109183'
              target='_blank'
              rel='noopener noreferrer'
            >
              <LinkedInIcon />
            </a>
          </li>
        </SocialsIcons>
      </ContactContent>
    </StyledContainer>
  );
};

export default connect(null, { setContactRef })(Contact);

const ContactContent = styled.div`
  width: 100%;
  color: ${props => props.theme.blue};
  text-align: center;

  p {
    line-height: 1.75;
  }
`;

const SocialsIcons = styled.ul`
  list-style: none;
  margin: 25px 0;

  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  li {
    margin: 15px 25px;
  }

  a {
    display: inline-block;
    transform-origin: 50% 50%;
    transform: scale(1);
    transition: transform 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);

    &:hover {
      transform: scale(1.25);
    }
  }

  svg {
    width: 30px;
    height: 30px;
    path {
      fill: ${props => props.theme.white};
    }
  }
`;
