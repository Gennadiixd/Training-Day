import { CHANGE_STATUS_HEATUP, CHANGE_STATUS_ASSESMENT, CHANGE_STATUS_TRAINING, SET_TIMER_STARTED, SET_TIMER_PAUSED, SET_TIMER_RESUMED, SET_TIMER_STOPPED } from './actions/actionTypes'

const initialState = {
    status : "Welcome"
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_STATUS_HEATUP: {
            return ({...state, ...action.payload, status : `Heat Up: ${action.payload.exercise}`})
        }
        default: {
            return state;
        }
    }
}