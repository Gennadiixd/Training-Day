import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import './Heatup.css'
import { heatupAC, startTimerAC, setExerciseQuantityAC, decrExerciseQuantityAC } from "../../redux/actions/actions";

import ExerciseContainer from '../ExerciseContainer'
// import Exercise from '../Exrcise/Exercise'
// import Neck from './neck.jpg';
// import Hands from './hands.jpg';
// import Timer from '../Timer/Timer'

function Heatup(props) {

    useEffect(()=>{
        props.heatup('Just Heat Up')
    }, [props])
    // const [needChange, setNeedChange] = useState(false)
    // const [progressState, setprogressState] = useState(100)

    //let exerciseArray = [{ name: 'Neck', img: Neck }, { name: 'Hands', img: Hands }, { name: 'Neck', img: Neck }]    

    // useEffect(() => {
    //     props.setExerciseQuantity(exerciseArray.length-1)
    // }, [exerciseArray.length])

    // useEffect(() => {
    //     if (props.exerciseNumber >= 0) {
    //         props.setHeatupExercise(exerciseArray[props.exerciseNumber].name)
    //     }          
    // }, [props.exerciseNumber])

    // useEffect(() => {
    //     if (needChange && props.exerciseNumber > 0) {
    //         props.decrExerciseQuantity()             
    //         setprogressState(100)
    //         setNeedChange(false)            
    //     }   else {
    //         // finish
    //     }   
    // },[needChange])
    
    return (
        <>
            <ExerciseContainer/>            
            {/* <div className="imgContainer">
                {exerciseArray[props.exerciseNumber] && <Exercise exercise={exerciseArray[props.exerciseNumber]} />}                
            </div>
            <Timer  setNeedChange={setNeedChange} setprogressState={setprogressState} progressState={progressState}/> */}
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        heatup: (exercise) => { dispatch(heatupAC(exercise)) }
    }
}

export default connect(
    null,
    mapDispatchToProps,
)(Heatup);
