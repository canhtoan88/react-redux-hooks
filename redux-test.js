const { createStore } = require('redux');

// Type
const type = {
    INC_COUNTER: 'INC_COUNTER',
    DES_COUNTER: 'DES_COUNTER',
    ADD_COUNTER: 'ADD_COUNTER'
}

// Action
const action = {
    increase: () => {
        return {
            type: type.INC_COUNTER
        }
    },
    decrease: () => {
        return {
            type: type.DES_COUNTER
        }
    },
    add: (value) => {
        return {
            type: type.ADD_COUNTER,
            value: value
        }
    }
};

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
store.dispatch(action.increase());
store.dispatch(action.decrease());
store.dispatch(action.add(5));
console.log(store.getState());