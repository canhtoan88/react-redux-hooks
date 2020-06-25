const { createStore } = require('redux');

// Reducer
const initialState = {
    counter: 0
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC_COUNTER': {
            return {
                ...state,
                counter: state.counter + 1
            }
        }
        case 'DES_COUNTER': {
            return {
                ...state,
                counter: state.counter - 2
            }
        }
        case 'ADD_COUNTER': {
            return {
                ...state,
                counter: state.counter + action.value
            }
        }
        default: {
            return state;
        }
    }
}

// Store
const store = createStore(rootReducer);

// Subscribe
store.subscribe(() => {
    console.log('Subscribe - ', store.getState());
});

// Dispatch
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'DES_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 5});
console.log(store.getState());