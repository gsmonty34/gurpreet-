import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'


function Login_form() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    let navigate = useNavigate();

    useEffect(() => { alert("welcome to My page") }, [])
    return (
        <div id='login_page'>
            <form>
                <h1>Log In </h1>
                <label>Email<br />
                    <input type="text" name='email' placeholder='Enter you email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </label>
                <br />
                <label htmlFor=""> Password <br />
                    <input type="password" name='password' placeholder='Enter you pasword' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </label>
                <br />
                <br />
                <button type="submit" className='login_btn' onClick={() => {

                    if (email === "" || password === "") { alert("Empty Email or Password !") }

                    else if (email.length <= 5 || password.length <= 5) { alert("Small Email or Password !") }

                  

                    else{
                        navigate('/welcome')
                    }
                    
                }
                }> Log-In </button>

            </form>

        </div>
    )
}

export default Login_form
