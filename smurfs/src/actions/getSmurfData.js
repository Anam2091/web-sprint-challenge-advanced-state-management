import axios from "axios"


//create action
export const FETCHING_SMURF_DATA = "FETCHING_SMURF_DATA"


//create axios call for api
export const getSmurfData = () => (dispatch) => {
  console.log("SmurfData action");
  axios
    .get("http://localhost:3333/smurfs", {})
    .then((res) => {
      dispatch({ type: FETCHING_SMURF_DATA, payload: res.data });
      console.log("API Response: ", res);
    })
};