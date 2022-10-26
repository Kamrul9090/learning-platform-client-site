import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SignIn = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <h1>Sign Up</h1>
        </div>
    );
};

export default SignIn;