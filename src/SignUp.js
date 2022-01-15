
// import Search from "./Search";
import { useState } from "react";
import { NavLink } from "react-router-dom";








function SignUp({setUser}) {

    const [full_name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    function handleSubmit(e) {
        e.preventDefault();
        console.log('Setting Up Your Books');
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                full_name,
                email,
                username,
                password,
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
            }
        });
    }






    return (
        <div className=' Home '>
            <div className='wall'>
                <div className='art-wall'>
                    <NavLink to='/home' exact> <h1>Back</h1> </NavLink>
                    Image
                </div>
                <div className='to-form'>
                    <form onSubmit={handleSubmit}>
                        <label className='signin-title'>Sign Up</label>
                        <br />
                        <label className='ph'>I Read and Agree to Terms&Conditions ?</label>
                        <h3>Name*</h3>
                        <input placeholder='name' onChange={(e) => setName(e.target.value)} value={full_name} />
                        <h3>Email*</h3>
                        <input placeholder='email' onChange={(e) => setEmail(e.target.value)} value={email} />
                        <h3>Username </h3>
                        <input placeholder='username' onChange={(e) => setUsername(e.target.value)} value={username} />
                        <h3>Password</h3>
                        <input placeholder='password' onChange={(e) => setPassword(e.target.value)} value={password} />
                        <button>Sign Up</button>

                    </form>
                    <div className='signUplink'>
                        <h5>Already a user ?<NavLink to='/signin' exact> <button>Sign In </button></NavLink></h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;