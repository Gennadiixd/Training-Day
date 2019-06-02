import React, { useState, useEffect } from 'react'
import StratAndPauseButton from './StratAndPauseButton/StratAndPauseButton'
import { heatupAC, startTimerAC, setExerciseQuantityAC, decrExerciseQuantityAC } from "../redux/actions/actions";
import { connect } from "react-redux";

import Heatup from './Heatup/Heatup'
import Header from './Header/Header'

const mapStateToProps = (state) => ({
    state
});

function StartAndPauseContainer(props) {
    const [timerStatus, setTimerStatus] = useState(true)
    let setHeatupExercise = props.heatup;
    let setExerciseQuantity = props.setExerciseQuantity;
    let exerciseNumber = props.state.training.quantity;
    let decrExerciseQuantity = props.decrExerciseQuantity;

    return (
        <div>
            
            
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        heatup: (exercise) => { dispatch(heatupAC(exercise)) },
        startTimer: (seconds) => { dispatch(startTimerAC(seconds)) },
        setExerciseQuantity: (quntity) => { dispatch(setExerciseQuantityAC(quntity)) },
        decrExerciseQuantity: () => {dispatch(decrExerciseQuantityAC())}
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(StartAndPauseContainer);
