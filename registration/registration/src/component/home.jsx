import { useHistory } from "react-router-dom";

const Home = () => {
    const history = useHistory('');

    const loginForm = () => {
        history.push('/login')
    }
    const signUpForm = () => {
        history.push('/signup')
    }

    return (
        <div className="form-reg container">
            <div className="form-wrapper log-sign">
                <div className=""><button onClick={signUpForm} className="btn">SignUp</button></div>
                <div className=""><button onClick={loginForm} className="btn">Login</button></div>
            </div>
        </div>
    )
}

export default Home;
