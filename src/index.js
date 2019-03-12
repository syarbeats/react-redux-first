import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';

function reducer(state, action){
    if(action.type === 'changeState'){
        return action.payload.newState;
    }

    return 'Initial State';
}

const store = createStore(reducer);
console.log(store.getState());

const action = {
    type: 'changeState',
    payload: {
        newState: 'New State'
    }
};

store.dispatch(action);
console.log(store.getState());

ReactDOM.render(
    <di>
        <h1>Learning React-Redux</h1>
        <h3>Please check inspect element for checking the state</h3>
    </di>,
    document.getElementById('root'));

