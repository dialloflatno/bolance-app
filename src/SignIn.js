
// import Search from "./Search";
// import Welcome from "./Welcome";
import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";



function SignIn({ handleLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        fetch("/signin", {
            method: "POST",
            headers: {
                "Content-Type" :"application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => handleLogin(user));
            }
        });
    }


    function handleClick() {
        console.log("Login button has been clicked!");
    }

    return (
        <div className=' Home '>
            <div className='wall'>
                <div className='art-wall'>
                    <Link to='/' exact> <h1>Back</h1> </Link>

                    Image
                </div>
                <div className='to-form'>
                    <form onSubmit={handleSubmit}>
                        <label className='signin-title'>Sign in Bolance</label>
                        <br />
                        <label className='ph'>Start getting your expense done with ease</label>
                        <h3>Username or Email</h3>
                        <input placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                        <h3>Password</h3>
                        <input placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button onClick={handleClick} type='submit'> Budget</button>
                    </form>
                    <div className='signUplink'>
                        <h5>Not yet a user ? <Link to='/signup' exact><button>Sign Up Now </button></Link></h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;