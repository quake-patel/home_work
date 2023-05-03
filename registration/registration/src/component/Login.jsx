import { useState } from "react";
import { useHistory } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { newLogin } from '../action';

const Login = () => {
    const dispatch = useDispatch('')

    const [emailLogin, setEmailLogin] = useState('')
    const [passwordLogin, setPasswordLogin] = useState('')
    const [logBlogs, setLogBlogs] = useState('')
    const history = useHistory('');

    const logSubmit = (value) => {
        value.preventDefault();
        fetch('http://localhost:8000/blogs/')
            .then((res) => res.json())
            .then((data) => {
                setLogBlogs(data.find((item) => item.email === emailLogin && item.password === passwordLogin))
                localStorage.setItem('list', JSON.stringify(logBlogs))
                localStorage.getItem('list')
            })
            .then(() => {
                setEmailLogin('')
                setPasswordLogin('')
            })

    }
    if (logBlogs) {
        if (logBlogs.email.length > 0) {
            dispatch(newLogin(logBlogs.email))
            console.log(logBlogs.email)
            history.push('/article')
        } else {
            history.push('/login')
        }
    }

    return (
        <div className="form-reg container">
            <div className=""></div>
            <form onSubmit={logSubmit} className="form-wrapper">
                <div className="page-title">LogIn Page</div>
                <div className="form-area">
                    <label htmlFor="">Email:</label>
                    <input value={emailLogin} onChange={(e) => setEmailLogin(e.target.value)} type="text" name='email' placeholder='Email...' />
                </div>
                <div className="form-area">
                    <label htmlFor="">Password:</label>
                    <input value={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)} type="text" name='password' placeholder='Password...' />
                </div>
                <div className="btn-wrapper">
                    <button className='btn'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login;


