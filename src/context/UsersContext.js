import React, { createContext, useState } from "react";

export const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
    const [users, setUsers] = useState([]);

    const [selectedUser, setSelectedUser] = useState({});

    const clearUsers = () => {
        setUsers([]);
    }

    const deleteUser = (user) => {
        let usersAfterDelete = users.filter(item => item.name !== user.name);
        setUsers(usersAfterDelete);
    }
    
    const contextValue = { 
        users,
        setUsers,
        selectedUser,
        setSelectedUser,
        clearUsers,
        deleteUser,
    };

    return (
        <UsersContext.Provider value={ contextValue }>
            { children }
        </UsersContext.Provider>
    );
}
