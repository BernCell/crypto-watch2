import { SET_STABLE_STATE } from "../action/stable.actions";

const initialState = { showStable: true };

export default function stableReducer(state = initialState, action) {
    switch (action.type) {
        case SET_STABLE_STATE:
            return { showStable: action.payload };
        default:
            return state;
    }
}