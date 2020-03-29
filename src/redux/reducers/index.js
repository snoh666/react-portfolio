const initialState = {
  sections: {
    welcome: false,
    about: false,
    projects: false,
    contact: false
  },
  isLoaded: {
    top: false
  }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_WELCOME_REF':
      return {
        ...state,
        sections: {
          ...state.sections,
          welcome: action.ref
        }
      }
    case 'SET_ABOUT_REF':
      return {
        ...state,
        sections: {
          ...state.sections,
          about: action.ref
        }
      }
    case 'SET_PROJECTS_REF':
      return {
        ...state,
        sections: {
          ...state.sections,
          projects: action.ref
        }
      }
    case 'SET_CONTACT_REF':
      return {
        ...state,
        sections: {
          ...state.sections,
          contact: action.ref
        }
      }
    default:
      return {
        ...state
      }
  }
};

export default rootReducer;