import * as actionTypes from '../actionTypes'

export const searchHistory = (userInput, results) => {
    return {
        type: actionTypes.SEARCH_HISTORY,
        userInput: userInput,
        results: results,
    }
} 