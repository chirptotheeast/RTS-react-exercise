import * as actionTypes from "./actionTypes";

const initialState = {
    userInput: [],
    results: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_HISTORY:
            console.log(action)
            return {
                ...state,
                userInput: [ ...state.userInput, action.userInput ],
                results: [...state.results, ...action.results]
            }
         default:
             return state;   
    }
}

export default reducer