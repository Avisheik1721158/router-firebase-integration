import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import './Header.css';

const Header = () => {
    const { user, signOutWithGoogle } = useFirebase()
    return (
        <div className='header'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/reviews'>Reviews</Link>
                <span> {user?.displayName}</span>
                {user?.uid ? <button onClick={signOutWithGoogle}> Sign Out </button> :
                    < Link to='/login'>Log In</Link>
                }
                <Link to='/register'>Register</Link>
            </nav>
        </div >
    );
};

export default Header;