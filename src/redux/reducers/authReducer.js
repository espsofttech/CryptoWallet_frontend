import * as ACTIONTYPES from '../actionTypes'

export const initialState = {
    USER_LOGIN_DETAILS: {},
    SECOND_FARMING_FORM_Details: {},
    kamleshDetails: {},
    tokenList: {}
};
export default function auth(state = initialState, action) {
    //console.log('action.payload', action.payload);
    switch (action.type) {
        case ACTIONTYPES.USER_FORM:
            return {
                ...state,
                USER_LOGIN_DETAILS: action.payload,
            };

            case ACTIONTYPES.USER_FORM_DATA:
                return {
                    ...state,
                    USER_LOGIN_DETAILS_DATA: action.payload,
                };

        case ACTIONTYPES.SECOND_FARMING_FORM:
            return {
                ...state,
                SECOND_FARMING_FORM_Details: action.payload,
            };

        case ACTIONTYPES.TOKENLIST:
            return {
                ...state,
                kamleshDetails: action.payload,
            };

        default:
            return state;
    }
}
