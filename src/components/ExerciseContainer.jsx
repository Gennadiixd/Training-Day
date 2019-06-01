import React, { useState, useEffect } from 'react'
import StratAndPauseButton from './StratAndPauseButton/StratAndPauseButton'
import Timer from './Timer/Timer'
import { heatupAC } from "../redux/actions/actions";
import { connect } from "react-redux";
import Heatup from './Heatup/Heatup'
import Header from './Header/Header'

const mapStateToProps = (state) => ({
    state
});

function StartAndPauseContainer(props) {
    const [show, setShow] = useState(null)
    const [showTimer, setShowTimer] = useState(null)
    const [nextExercise, setNextExercise] = useState(0)
    const [time, setTime] = useState(10)
    const [timerStatus, setTimerStatus] = useState('waiting')

    useEffect(() => {
        props.setAppState(props.state.training.status)
        if (timerStatus === 'exerciseDone') {
            setNextExercise (nextExercise + 1)
            
        }
    }, [timerStatus]);

    useEffect(() => {
        setTimerStatus('waiting')
        console.log(timerStatus)
    });
    
    return (
        <div>
            <Header state={props.state.training.status} />
            {show && <Heatup next={nextExercise} setHeatup={props.heatup} />}
            {showTimer && <Timer time={time} timerStatus={timerStatus} setTimerStatus={setTimerStatus} />}
            <StratAndPauseButton setStartTimer={setShowTimer} setShow={setShow} />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        heatup: (exercise) => { dispatch(heatupAC(exercise)) }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(StartAndPauseContainer);
