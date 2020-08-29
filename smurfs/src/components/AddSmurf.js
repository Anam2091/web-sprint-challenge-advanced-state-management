import React, { useState } from "react";
import { postSmurf } from "../actions/addSmurf";
import { connect } from "react-redux";

const AddSmurf = (props) => {
    const [state, setState] = useState({name: '', age: '', height: ''});

  const submit = (e) => {
    props.postSmurf(state)
};

  const updateName = (e) =>{
    setState({...state, name: e.target.value})
  }
  const updateAge = (e) =>{
    setState({...state, age: e.target.value})
  }
  const updateHeight = (e) =>{
    setState({...state, height: e.target.value})
  }

  return (
    <div>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={updateName}
          />
          <input
            type="text"
            name="age"
            value={state.age}
            onChange={updateAge}
          />
          <input
            type="text"
            name="height"
            value={state.height}
            onChange={updateHeight}
          />
          <button
            onClick={submit}
          >
            Add Smurf
          </button>
    </div>
  );
};



const mapDispatchToProps = { postSmurf };

export default connect(null, mapDispatchToProps)(AddSmurf);
// connect returns a HOC to "enhance" our component, so this becomes:
// HOC(Title)
