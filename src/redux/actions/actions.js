import { CHANGE_STATUS_HEATUP, CHANGE_STATUS_ASSESMENT, CHANGE_STATUS_TRAINING, SET_TIMER_STARTED, SET_TIMER_PAUSED, SET_TIMER_RESUMED, SET_TIMER_STOPPED } from './actionTypes'

export const heatupAC = (exercise) => ({
    type: CHANGE_STATUS_HEATUP,
    payload: {
        exercise
    }
})