import React from 'react';
import useFirebase from '../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h2> Please Log In  </h2>
            <div style={{ margin: '20px' }}>
                <button onClick={signInWithGoogle}>Google Sign in</button>
            </div>
            <form>
                {/* <input type="text" name="" id="" placeholder='Your Email' />
                   <br /> */}
                <input type="email" name="" id="" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" placeholder='Your Password' />
                <br />
                <input type="submit" value="Log In" />

            </form>

        </div>
    );
};

export default Login;