import {createStore} from 'redux';

let reducer = function(oldState, action){
    
    let initialState = {
        profile: [
            {name: "Mohd Sami", email: "sami@gmail.com"} 
        ]
    }
    if(!oldState) { return initialState }

    let newState = oldState;

    return newState;
}

let store = createStore(reducer);

function stateMapper(state){
    return state;
}

export {store, stateMapper};