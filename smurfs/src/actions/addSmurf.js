import axios from "axios"

//create action

export const postSmurf = (data) => (dispatch) => {
    console.log("SmurfData action", data);
    axios
      .post("http://localhost:3333/smurfs", data)
      .then((res) => {
      })
  };


