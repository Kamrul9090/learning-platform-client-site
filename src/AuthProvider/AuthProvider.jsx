import React, { useEffect } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.init';
import { useState } from 'react';




export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [mode, setMode] = useState('dark');

    const toggletheme = () => {
        setMode((curr) => (curr === 'light' ? 'dark' : 'light'));
    }

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    // console.log(user);

    // signIn with google 
    const signInGoogle = (provider) => {
        setLoader(true)
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }

    // sign in with GitHub

    const signInGithub = (provider) => {
        setLoader(true)
        return signInWithPopup(auth, provider);
    }

    // create User

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in with user
    const signInUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // UpdateUserProfile

    const updateUserProfile = (profile) => {
        setLoader(true)
        return updateProfile(auth.currentUser, profile);
    }

    // Get User

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('Auth state change', currentUser);
            setLoader(false)
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, [])

    const userInfo = {
        user,
        loader,
        setLoader,
        mode,
        toggletheme,
        signInGoogle,
        signInGithub,
        createUser,
        logOut,
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