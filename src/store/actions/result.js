import * as actionTypes from './actionTypes';

// Action Creator used for running synchronous code
export const saveResult = ( res ) => {
    //const updatedResult = res * 2;
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    };
};

// Action Creator used for running asynchronous code, dispatches synchronous action
export const storeResult = ( res ) => {
    return (dispatch, getState) => {
        // Don't over use getState in action creators
        setTimeout( () => {
            const oldCounter = getState().ctr.counter;
            console.log(oldCounter);
            dispatch(saveResult(res))
        }, 2000);
    }; 
};

export const deleteResult = (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId
    };
};