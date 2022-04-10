import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import app from "../../firebase.init";

const useFirebase = () => {
    const [user, setUser] = useState({})
    const signOutWithGoogle = () => {
        signOut(auth)
            .then(() => {
                // const user = result.user;
                // setUser(user)
                console.log('sign out')
            })
    }
    // useEffect(() => {

    // }, []);
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
                console.log(user.uid)

            })
            .catch()
    }
    // fire to sign in
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [])
    // return [user, setUser];
    return { user, signInWithGoogle, signOutWithGoogle }
}


const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
export default useFirebase;