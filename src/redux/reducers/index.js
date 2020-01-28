const initialState = {
  githubAPI: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GITHUB_API':
      return {
        ...state,
        githubAPI: action.apiResult
      };
    default:
      return {
        ...state
      }
  }
};

export default rootReducer;