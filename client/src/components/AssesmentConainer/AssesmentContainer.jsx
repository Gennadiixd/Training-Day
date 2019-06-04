import React, { useState, useEffect, useRef } from 'react'
import { connect } from "react-redux";

import Exercise from '../Exrcise/Exercise'
import AssesmentForm from '../AssesmentForm/AssesmentForm'

const mapStateToProps = (state) => ({
    state
});

function AssesmentContainer(props) {
    const [exerciseNumber, setExerciseNumber] = useState(0)
    const [showExerciseAndForm, setShowExerciseAndForm] = useState(true)
    const [exerciseArray, setExerciseArray] = useState(props.activityExercises)
    const [next, setNext] = useState(false)
    const [fromForm, setFromForm] = useState(0)

    useEffect(() => {
        props.setActivity(props.activityExercises[exerciseNumber].name)
    }, [exerciseNumber])

    //Change exercise by signal from form
    useEffect(() => {
        debugger
        if (next) {
            nextExercise(exerciseArray)
        }
    }, [next])

    //function changing exercises
    function nextExercise(arrayWithExercises) {
        if (next) {
            if (exerciseNumber < arrayWithExercises.length - 1) {
                //отправить в редакс стор упражнение и результат
                setExerciseNumber(exerciseNumber + 1)
                setNext(false)
            } else {
                props.setActivity('finished')
                setShowExerciseAndForm(false)
            }
        }
    }

    return (
        <div>
            {showExerciseAndForm && <Exercise exercise={exerciseArray[exerciseNumber]} />}
            {showExerciseAndForm && <AssesmentForm setFromForm={setFromForm} fromForm={fromForm} setNext={setNext} />}
        </div>
    )
}

export default connect(
    mapStateToProps,
    null,
)(AssesmentContainer);
