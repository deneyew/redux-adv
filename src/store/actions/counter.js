import * as actionTypes from './actionTypes';

// Action Creator used for running synchronous code
export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    };
};

// Action Creator used for running synchronous code
export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
        
    };
};

// Action Creator used for running synchronous code
export const add = (value) => {
    return {
        type: actionTypes.ADD,
        val: value
    };
};

// Action Creator used for running synchronous code
export const subtract = (value) => {
    return {
        type: actionTypes.SUBTRACT,
        val: value
    };
};