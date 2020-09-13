import React, {useContext} from 'react';
import UserContext from '../../context/user-context';

const UserList = () => {
    const userContext = useContext(UserContext);
    return (
        <ul>
            {userContext.userList.map((user, index) => {
                return <li key={index}>{user.name} - {user.mail}</li>
            })}
        </ul> 
    )
}

export default UserList;