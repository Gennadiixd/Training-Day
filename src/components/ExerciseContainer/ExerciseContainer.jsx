import React, { useState, useEffect } from 'react'
import { heatupAC, startTimerAC, setExerciseQuantityAC, decrExerciseQuantityAC } from "../../redux/actions/actions";
import { connect } from "react-redux";
import './ExerciseContainer.css'

import Timer from '../Timer/Timer';
import Exercise from '../Exrcise/Exercise'
import Neck from '../HeatUpImg/neck.jpg'
import Hands from '../HeatUpImg/hands.jpg'
import Test from '../HeatUpImg/ZIyE.gif'


const mapStateToProps = (state) => ({
    state
});

function StartAndPauseContainer(props) {
    const [exerciseNumber, setExerciseNumber] = useState(0)
    const [timerFinish, setTimerFinish] = useState(false)
    const [showExerciseAndTimer, setShowExerciseAndTimer] = useState(true)
    //duration in ms, 100ms = 10sec
    let heatupArray = [{ name: 'Xpenb', img: Test, duration: 10 }, { name: 'Hands', img: Hands, duration: 15 }]

    useEffect(() => {
        props.heatup(heatupArray[exerciseNumber].name)
    }, [exerciseNumber])

    useEffect(() => {
        if (timerFinish) {
            nextExercise(heatupArray)
        }
    }, [timerFinish])

    async function nextExercise(arrayWithExercises) {
        if (timerFinish) {
            if (exerciseNumber < arrayWithExercises.length - 1) {
                debugger
                await setExerciseNumber(exerciseNumber + 1)
                setTimerFinish(false)
            } else {
                props.heatup('finished')
                setShowExerciseAndTimer(false)
                return false
            }
        }
    }

    return (
        <>
            <div className='imgContainer'>
                {showExerciseAndTimer && <Exercise exercise={heatupArray[exerciseNumber]} />}
            </div>
            {showExerciseAndTimer && <Timer setTimerFinish={setTimerFinish} duration={heatupArray[exerciseNumber].duration} />}
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        heatup: (exercise) => { dispatch(heatupAC(exercise)) },
        startTimer: (seconds) => { dispatch(startTimerAC(seconds)) },
        setExerciseQuantity: (quntity) => { dispatch(setExerciseQuantityAC(quntity)) },
        decrExerciseQuantity: () => { dispatch(decrExerciseQuantityAC()) }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(StartAndPauseContainer);
