import React, { Component } from "react";
import "./App.css";
import {useEffect} from "react"
import { connect } from "react-redux";
import{getSmurfData} from "../actions/getSmurfData"
import Smurfs from "./smurfs";
import AddSmurf from "./AddSmurf"

const App = ({ getSmurfData }) => {
  // Hit the API after the component mounts
  useEffect(() => {
    getSmurfData();
  }, [getSmurfData]);

  
  return (
    <>
    <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <Smurfs/>
        <AddSmurf/>
      </div>
     
    </>
  );
};






const mapDispatchToProps = { getSmurfData };

export default connect(null, mapDispatchToProps)(App);
