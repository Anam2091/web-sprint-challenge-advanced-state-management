import React from "react";
import { connect } from "react-redux";
import Smurf from './smurf'


const Smurfs = (props) =>{
return(
    <>
        {
            props.smurfs.map(smurf =>{return <Smurf smurf = {smurf}/>})

        }
    </>
)

}



const mapStateToProps = (state) => {
    console.log(state)
    return {
      smurfs: state.smurfs,
     
    };
};

export default connect(mapStateToProps, null)(Smurfs);