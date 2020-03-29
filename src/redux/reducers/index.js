const initialState = {
  sections: {
    top: false,
    about: false,
    projects: false,
    contact: false
  }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        ...state
      }
  }
};

export default rootReducer;