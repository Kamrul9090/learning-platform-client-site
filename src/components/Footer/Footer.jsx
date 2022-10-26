import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Footer = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);
    return (
        <div>
            <h3>this is footer</h3>
        </div>
    );
};

export default Footer;