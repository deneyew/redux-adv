import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const initialState = {
    results:[]
};

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(result => result.id !== action.resultElId);
    return updateObject(state, {results: updatedArray});
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.STORE_RESULT:
            // Change data, better to change data in reducer instead of in action Creator
            /* return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
            } */
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result *2})});
        case actionTypes.DELETE_RESULT:
            //const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            /* return {
                ...state,
                results: updatedArray
            } */
            //return updateObject(state, {results: updatedArray});
            return deleteResult(state, action);
        default:
            // Do nothing for now. 
    }
    return state;
};

export default reducer;