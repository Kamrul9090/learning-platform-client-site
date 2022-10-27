import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SignUp = () => {
    const navigate = useNavigate()
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState({
        emailErrors: '',
        passwordError: '',
        submitError: '',
    })

    const handleSubmitForm = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;

        createUser(userInfo.email, userInfo.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                handleProfile(name, photoURL)
                toast.success('Sign Up success')
                navigate('/')
                setErrors({ ...errors, submitError: '' })
            })
            .catch(e => {
                console.log(e.message);
                setErrors({ ...errors, submitError: e.code })
            })
    }

    const handleProfile = (name, photoURL) => {
        const profile = ({
            displayName: name,
            photoURL: photoURL
        })
        updateUserProfile(profile)
            .then(result => { })
            .catch(e => console.error(e))
    }


    const handleEmailForm = e => {
        const email = e.target.value;
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setErrors({ ...errors, emailErrors: 'Give a valid email' })
            setUserInfo({ ...setUserInfo, email: '' });
        } else {
            setErrors({ ...errors, emailErrors: '' })
            setUserInfo({ ...userInfo, email: email });
        }
    }

    const handlePasswordForm = e => {
        const password = e.target.value;
        if (password.length < 6) {
            setErrors({ ...errors, passwordError: 'Your password should be at least 6 characters' });
            setUserInfo({ ...userInfo, password: '' });
        } else {
            setErrors({ ...errors, passwordError: '' })
            setUserInfo({ ...userInfo, password: password })
        }
    }
    return (
        <div className='mt-5 mx-auto fw-semibold'>
            <Form onSubmit={handleSubmitForm} className='w-50 mx-auto border p-2 border-2 border-success rounded'>
                <h2 className='text-center text-success fw-bold'>Sign Up</h2>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name="photoURL" type="text" placeholder="Photo url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleEmailForm} type="email" placeholder="Enter email" required />
                    {
                        errors.emailErrors && <p className='text-danger'><small>{errors.emailErrors}</small></p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handlePasswordForm} type="password" placeholder="Password" required />
                    {
                        errors.passwordError && <p className='text-danger'><small>{errors.passwordError}</small></p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Form.Text className="text-muted">
                    {
                        errors.submitError && <p className='text-danger'><small>{errors.submitError.slice(5, errors.submitError.length)}</small></p>
                    }
                </Form.Text>
                <Button onClick={handleProfile} className='w-100 fw-bold' variant="success" type="submit">
                    sign Up
                </Button>
                <p><small>Already have an account? <Link to="/login">login please</Link></small></p>
            </Form>
        </div>
    );
};

export default SignUp;