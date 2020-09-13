import React, { useState } from 'react';
import UserInput from './User/UserInput';
import UserList from './User/UserList';

import UserContext from '../context/user-context';

const User = (props) => {
    const [ userList, setUserList ] = useState([]);

    const addUser = (user, cb) => {
        if (!user.name || !user.mail) {
            return alert('User and Mail is not empty!!');
        }
        if (userList.findIndex(u => u.mail === user.mail) !== -1) {
            return alert(user.mail + ' is existing..')
        }
        setUserList([...userList, user]);
        if (cb) cb();
    }

    const deleteUser = (mail) => {
        setUserList(userList.filter(user => user.mail !== mail));
    }

    return (
        <UserContext.Provider value={{userList, addUser, deleteUser}}>
            <UserInput />
            <UserList />
        </UserContext.Provider>
    )
}

export default User;