import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { setContactRef } from '../redux/actions';

import SectionTitle from './styled/SectionTitle';

const Contact = ({ setContactRef }) => {
  const contactRef = useRef();

  useEffect(() => {
    setContactRef(contactRef);
  });

  return (
    <div ref={contactRef}>
      <SectionTitle>
        <span>Contact</span>
      </SectionTitle>
    </div>
  );
};

export default connect(null, { setContactRef })(Contact);
