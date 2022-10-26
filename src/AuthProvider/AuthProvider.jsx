import React, { Profiler, useEffect } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.init';
import { useState } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    // console.log(user);
    // signIn with google 
    const signInGoogle = (provider) => {
        return signInWithPopup(auth, provider);
    }

    // sign in with GitHub

    const signInGithub = (provider) => {

        return signInWithPopup(auth, provider);
    }

    // create User

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in with user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // UpdateUserProfile

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    // Get User

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('Auth state change', currentUser);
            // setLoader(false)
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, [])

    const userInfo = {
        user,
        loader,
        signInGoogle,
        signInGithub,
        createUser,
        signInUser,
        updateUserProfile
    }
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;