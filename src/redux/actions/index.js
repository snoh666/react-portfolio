const getRefs = state => ({ sections: state.sections });

const setWelcomeRef = state => ({
  type: 'SET_WELCOME_REF',
  ref: state,
});

const setAboutRef = state => ({
  type: 'SET_ABOUT_REF',
  ref: state,
});

const setProjectsRef = state => ({
  type: 'SET_PROJECTS_REF',
  ref: state,
});

const setContactRef = state => ({
  type: 'SET_CONTACT_REF',
  ref: state,
});

export { getRefs, setWelcomeRef, setAboutRef, setProjectsRef, setContactRef };
