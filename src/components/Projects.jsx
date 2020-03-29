import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { setProjectsRef } from '../redux/actions';

function Projects({ setProjectsRef }) {

  const projectsRef = useRef();

  useEffect(() => {
    setProjectsRef(projectsRef);
  });

  return (
    <div ref={projectsRef}>
      <h2>
        Projects
      </h2>
    </div>
  );
}

export default connect(
  null,
  { setProjectsRef }
)(Projects);