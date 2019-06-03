import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import './Heatup.css'
import { heatupAC } from "../../redux/actions/actions";

import ExerciseContainer from '../ExerciseContainer/ExerciseContainer'

function Heatup(props) {

    return (
        <>
            <ExerciseContainer />
        </>
    )
}


export default connect(
    null,
    null,
)(Heatup);
