import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useState } from 'react';

const Login = () => {
    const [errors, setErrors] = useState({
        emailError: '',
        passwordError: '',
    });
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    });

    const handleEmail = e => {
        const email = e.target.value;
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {

            setErrors({ ...errors, emailError: 'Please give a valid email' });
            setUserInfo({ ...userInfo, email: '' })

        } else {
            setErrors({ ...errors, emailError: '' })
            setUserInfo({ ...userInfo, email: email })
        }
    }

    const handlePassword = e => {
        const password = e.target.value;
        if (password.length < 6) {
            setErrors({ ...errors, passwordError: 'At least 6 characters' });
            setUserInfo({ ...userInfo, password: '' })

        } else {
            setErrors({ ...errors, passwordError: '' })
            setUserInfo({ ...userInfo, password: password })
        }
    }

    console.log(userInfo)
    return (
        <Form className='w-50'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={handleEmail} type="email" placeholder="Enter email" required />
                {
                    errors?.emailError && <p className='text-danger'>{errors.emailError}</p>
                }
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={handlePassword} type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
            <Button variant="primary" type="submit">
                Login
            </Button>
            <p><small>New in site? <Link to='/register'>Sign Up</Link></small></p>
        </Form>
    );
};

export default Login;