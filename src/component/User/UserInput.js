import React, { useContext, useRef, useReducer } from 'react';
import UserContext from '../../context/user-context';

const User = () => {
    const nameRef = useRef(null);
    const mailRef = useRef(null);
    const reducerRef = useRef(null);
    let formRef = null;

    const userContext = useContext(UserContext);

    const addUser = (e) => {
        e.preventDefault();
        const user = {
            name: nameRef.current.value,
            mail: mailRef.current.value
        }
        userContext.addUser(user, () => {
            formRef && formRef.reset();
            nameRef.current.focus();
        });
    }

    const listReducer = (state, action) => {
        switch (action.type) {
            case 'ADD':
                return state.concat(action.payload);
            case 'DELETE':
                return state.filter(reducer => reducer !== action.payload);
            default:
                return state;
        }
    }

    const [reducers, dispatch] = useReducer(listReducer, []);

    const addReducer = () => {
        const value = reducerRef.current.value;
        if (!reducers.includes(value))
            dispatch({type: 'ADD', payload: reducerRef.current.value});
    }
    const removeReducer = (payload) => {
        dispatch({type: 'DELETE', payload});
    }

    return (
        <div>
            <form ref={ref => formRef = ref} onSubmit={addUser}>
                <input type="text" ref={nameRef} placeholder={'Name'}/><br/>
                <input type="text" ref={mailRef} placeholder={'Mail'}/><br/>
                <input type="submit" value={'Add'} />
            </form>
            <input type='text' ref={reducerRef} placeholder={'Reducer'}/><br />
            <button onClick={addReducer}>Use Reudcer</button>
            <hr />
            {reducers.map((reducer, index) => (<code key={index} onClick={() => removeReducer(reducer)}>{reducer}</code>))}
        </div>
    )
}

export default User;