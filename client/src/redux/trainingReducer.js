import { CHANGE_STATUS_HEATUP, CHANGE_STATUS_ASSESMENT, CHANGE_STATUS_TRAINING, SET_TIMER_STARTED, SET_TIMER_PAUSED, SET_TIMER_RESUMED, SET_TIMER_STOPPED, DECR_EXERCISE_QUANTITY, SET_EXERCISE_QUANTITY } from './actions/actionTypes'

const initialState = {
    status : "Welcome",   
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_STATUS_HEATUP: {
            return ({...state, ...action.payload, status : `Heat Up: ${action.payload.exercise}`})
        }
        case CHANGE_STATUS_TRAINING: {
            return ({...state, ...action.payload, status : `Training: ${action.payload.exercise}`})
        }
        case SET_TIMER_STARTED: {
            return ({...state, ...action.payload, timer : 'started'})
        }
        case SET_TIMER_PAUSED: {
            return ({...state, ...action.payload, timer : 'paused'})
        }
        case SET_TIMER_RESUMED: {
            return ({...state, ...action.payload, timer : 'resumed'})
        }
        case SET_TIMER_STOPPED: {
            return ({...state, ...action.payload, timer : 'stopped'})
        }  
        case DECR_EXERCISE_QUANTITY: {
            return ({...state, quantity : state.quantity - 1})
        }
        case SET_EXERCISE_QUANTITY: {
            return ({...state, ...action.payload})
        }       
        default: {
            return state;
        }
    }
}