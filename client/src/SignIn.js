
import { useState } from "react";
import { Link,useHistory } from "react-router-dom";
import SvgSign from "./SvgSign";



function SignIn({ setUser }) {


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useHistory()
    function handleSubmit(e) {
        e.preventDefault();

        fetch("/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => {
                    setUser(user) 
                    navigate.push('/')
                })
            }
        });
    }


    return (
        <div className=' Home '>
            <div className='wall'>
                <div className='art-wall'>
                    <SvgSign />
                </div>
                <div className='to-form'>
                    <form onSubmit={handleSubmit}>
                        <label className='signin-title'>Sign in Bolance</label>
                        <br />
                        <label className='ph'>Start getting your expense done with ease</label>
                        <h3>Username or Email</h3>
                        <input placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                        <h3>Password</h3>
                        <input placeholder='password' value={password} type='password' onChange={(e) => setPassword(e.target.value)} />
                        <button  type='submit'> Budget</button>
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