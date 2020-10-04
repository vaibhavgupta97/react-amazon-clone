
import React, { useState } from 'react';
import './Signin.css';
import { Link, useHistory } from "react-router-dom";
function Signin() {
const history = useHistory();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
return (
<div className="singin">
      <form >
    <Link to='/'>
    <img
    className="login__logo"
    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
    </Link>
        <h5>E-mail</h5>
        <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

        <h5>Password</h5>
        <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
     <Link to='/'>
        <button type='submit' className='signInButton'>Sign In</button></Link>
    </form>
        </div>
    )
}

export default Signin;
