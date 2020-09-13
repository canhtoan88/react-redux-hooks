import React from 'react';

const context = React.createContext({userList: [], addUser: () => {}, deleteUser: () => {}});

export default context;