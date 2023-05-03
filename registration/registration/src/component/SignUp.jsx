import React, { useState } from "react"
import { useHistory } from "react-router-dom";



const SignUp = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { username, email, password }
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() =>
            setUsername(''),
            setEmail(''),
            setPassword(''),
            history.push('/login')
        )
    }

    return (
        <div className="form-reg container">
            <form onSubmit={handleSubmit} className="form-wrapper">
                <div className="page-title">SignUp Page</div>
                <div className="form-area">
                    <label htmlFor="">Username:</label>
                    {<input value={username} onChange={(e) => setUsername(e.target.value)} type="text" name='name' placeholder='Username...' />}
                </div>
                <div className="form-area">
                    <label htmlFor="">Email:</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name='email' placeholder='Email...' />
                </div>
                <div className="form-area">
                    <label htmlFor="">Password:</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" name='password' placeholder='Password...' />
                </div>
                <div className="btn-wrapper">
                    <button className='btn'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp;
