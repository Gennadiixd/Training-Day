import React, { useState, useEffect, useRef } from 'react'
import { connect } from "react-redux";
import { setSTRAC } from "../../redux/actions/actions";
import './AssesmentContainer.css'

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
    const [fromForm, setFromForm] = useState(false)

    useEffect(() => {
        if (fromForm) {
            let STR = fromForm * props.activityExercises[exerciseNumber].modifier;
            props.setSTR(props.activityExercises[exerciseNumber].muscule, STR)
            setFromForm(false)
        }
    }, [fromForm])

    useEffect(() => {
        props.setActivity(props.activityExercises[exerciseNumber].name)
    }, [exerciseNumber])

    //Change exercise by signal from form
    useEffect(() => {
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
            <div className="imgContainer">
                {showExerciseAndForm && <Exercise exercise={exerciseArray[exerciseNumber]} />}
            </div>
            <div className="assesmentForm">
                {showExerciseAndForm && <AssesmentForm setFromForm={setFromForm} fromForm={fromForm} setNext={setNext} />}
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setSTR: (muscule, STR) => { dispatch(setSTRAC(muscule, STR)) },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AssesmentContainer);
