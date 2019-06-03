import { CHANGE_STATUS_HEATUP, CHANGE_STATUS_ASSESMENT, CHANGE_STATUS_TRAINING, SET_TIMER_STARTED, SET_TIMER_PAUSED, SET_TIMER_RESUMED, SET_TIMER_STOPPED, DECR_EXERCISE_QUANTITY, SET_EXERCISE_QUANTITY } from './actionTypes'

export const heatupAC = (exercise) => ({
    type: CHANGE_STATUS_HEATUP,
    payload: {
        exercise
    }
})

export const trainingAC = (exercise) => ({
    type: CHANGE_STATUS_TRAINING,
    payload: {
        exercise
    }
})

export const startTimerAC = (seconds) => ({
    type: CHANGE_STATUS_HEATUP,
    payload: {
        seconds
    }
})

export const decrExerciseQuantityAC = () => ({
    type: DECR_EXERCISE_QUANTITY,    
})

export const setExerciseQuantityAC = (quantity) => ({
    type: SET_EXERCISE_QUANTITY,  
    payload: {
        quantity
    }  
})


