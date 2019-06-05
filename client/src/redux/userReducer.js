import { SET_HANDS_STR, SET_STR } from './actions/actionTypes'

const initialState = {
    status: "newUser"
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_HANDS_STR: {
            return ({ ...state, HANDS_STR: `${action.payload.quantity}` })
        }
        case SET_STR: {
            return ({ ...state, [action.payload.muscule]: action.payload.STR })
        }
        default: {
            return state;
        }
    }
}