import React from 'react';
import { createContext } from 'react';

export const AuthContext = createContext('');

const AuthProvider = ({ children }) => {
    console.log(children)
    const user = { name: 'hasan' }
    const userInfo = { user }
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;