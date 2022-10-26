import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useState } from 'react';
import { FaGithub, FaGoogle, FaSignInAlt } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';

const Login = () => {
    const { signInGoogle, signInGithub, signInUser } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [errors, setErrors] = useState({
        emailError: '',
        passwordError: '',
        submitError: ''
    });
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    });

    // Handle Login Form
    const handleLoginForm = e => {
        e.preventDefault();

        // Sign in with user

        signInUser(userInfo.email, userInfo.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Login successfully');
            })
            .catch(e => {
                console.log(e.message)
            })
    }

    // Sign in with google
    const handleGoogleLogin = () => {
        signInGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('login with google successfully')
            })
            .catch(e => {
                console.log(e.message)
                setErrors({ ...errors, submitError: e.message })
            })
    }

    // Sign in with Github
    const handleGithubLogin = () => {
        signInGithub(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Login with Github successfully')
            })
            .catch(e => {
                console.log(e.message);
                setErrors({ ...errors, submitError: e.message })
            })


    }


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

    return (
        <Form className='w-75 mt-5 mx-auto border border-2 p-5 fw-semibold rounded' onSubmit={handleLoginForm}>
            <h3 className='text-center text-success fw-bold'>Login</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={handleEmail} type="email" placeholder="Enter email" required />
                {
                    errors?.emailError && <p className='text-danger'><small>{errors.emailError}</small></p>
                }
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={handlePassword} type="password" placeholder="Password" required />
                {
                    errors.passwordError && <p className='text-danger'><small>{errors.passwordError}</small></p>
                }
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Form.Text className="text-muted">
                {
                    errors.submitError && <p className='text-danger fw-bold'><small>{errors.submitError}</small></p>
                }
            </Form.Text>
            <Button variant="primary" className='w-100 mb-4' type="submit">
                <FaSignInAlt className='me-2'></FaSignInAlt>
                Login
            </Button>
            <Button onClick={handleGoogleLogin} variant="success" className='w-100 mb-4' type="submit">
                <FaGoogle className='me-2'></FaGoogle>
                Login With Google
            </Button>
            <Button onClick={handleGithubLogin} variant="dark" className='w-100 mb-2' type="submit">
                <FaGithub className='me-2'></FaGithub>
                Login With GitHub
            </Button>
            <p className='fw-semibold'><small>I don't have any account? <Link to='/register'>Sign Up Now</Link></small></p>
        </Form>
    );
};

export default Login;