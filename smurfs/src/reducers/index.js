//create initial state for app

const initialState = {
  smurfs: [],
};

//create reducer
export const reducerSmurf = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_SMURF_DATA":
      return {
        ...state,
        smurfs: action.payload,
      };
    default:
      return state;
  }
};
