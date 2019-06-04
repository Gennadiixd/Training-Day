import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import './ExerciseContainer.css'

import Timer from '../Timer/Timer';
import Exercise from '../Exrcise/Exercise'

const mapStateToProps = (state) => ({
    state
});

function ExerciseContainer(props) {

    const [exerciseNumber, setExerciseNumber] = useState(0)
    const [timerFinish, setTimerFinish] = useState(false)
    const [showExerciseAndTimer, setShowExerciseAndTimer] = useState(true)
    const [exerciseArray, setExerciseArray] = useState(props.activityExercises)
    //duration in ms, 100ms = 10sec    
    //send to redux store intended activity i.e. Heatup or Training
    useEffect(() => {        
        props.setActivity(props.activityExercises[exerciseNumber].name)
    }, [exerciseNumber])
    //Change exercise by timer signal
    useEffect(() => {
        if (timerFinish) {
            nextExercise(exerciseArray)
        }
    }, [timerFinish])

    //function changing exercises
    function nextExercise(arrayWithExercises) {
        if (timerFinish) {
            if (exerciseNumber < arrayWithExercises.length - 1) {                
                setExerciseNumber(exerciseNumber + 1)
                setTimerFinish(false)
            } else {
                props.setActivity('finished')
                setShowExerciseAndTimer(false)
            }
        }
    }

    return (
        <>
            <div className='imgContainer'>
                {showExerciseAndTimer && <Exercise exercise={exerciseArray[exerciseNumber]} />}
            </div>
            {showExerciseAndTimer && <Timer setTimerFinish={setTimerFinish} duration={exerciseArray[exerciseNumber].duration} />}
        </>
    )
}

export default connect(
    mapStateToProps,
    null,
)(ExerciseContainer);
