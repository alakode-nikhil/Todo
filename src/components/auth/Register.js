import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {

    const [toggle, setToggle] = useState(false)
    const[pass, setPass] =useState("")

    
    const toggleVisibility = ()=>{
        setToggle(!toggle);
    }

    const validatePass = (password)=>{
        return {
            haveCase:/[A-Z]/.test(password) && /[a-z]/.test(password),
            haveNum:/\d/.test(password),
            haveSplChar:/[!@#$%^&*]/.test(password),
            haveMinChar:password.length >=8
        };
    }


    //valid pass if all condition satisfy
    const passwordChecks = validatePass(pass)
    const validPass = Object.values(passwordChecks).every(Boolean);

    useEffect(()=>{
        console.log('Password State:',validPass)
    },[validPass])

    return (
        <div className='container d-flex justify-content-center align-items-center vh-100'>
            <div className="card mb-3 w-50 shadow-lg">
                <h2 className='card-title text-center' style={{color:'#0d6efd', fontWeight:'bold'}}>Register</h2>
                <div className="card-body">
                    <form>
                        <input type='text' className='form-control mt-2' id='userName' placeholder='User Name' />
                        <input type="email" className="form-control mt-2" id="email" placeholder='Email' aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text mt-1">We'll never share your email with anyone else.</div>
                        <div className='input-group'>
                            <input type={toggle ? "text":"password"} className="form-control mt-2" placeholder='Password' id="pass" onChange={(e)=>setPass(e.target.value)}/>
                            <i className={`bi ${toggle ? "bi-eye": "bi-eye-slash"}`}  style={{
                                position: "absolute",
                                right: "1%",
                                top: "60%",
                                transform: "translateY(-50%)",
                                cursor: "pointer",
                                zIndex: 5,
                            }}
                            onClick={toggleVisibility}
                            ></i>
                        </div>
                        <div className="d-grid gap-2 mt-2">
                            <button className="btn btn-primary" type="submit">Register</button>
                        </div>
                    </form>
                </div>
                <div className='container d-flex justify-content-center'>
                    <div className='card my-3 w-75 shadow-sm'>
                        < div className='card-body'>
                            <p className='card-text'>Password strength indicator</p>
                                <ul style={{listStyleType:'none'}}>
                                    {[
                                        {label:"Lower and upper case alphabets", isValid: passwordChecks.haveCase},
                                        {label:"Numbers(0-9)", isValid: passwordChecks.haveNum},
                                        {label:"Special characters (!@#$%^&*)", isValid: passwordChecks.haveSplChar},
                                        {label:"Minimum 8 characters", isValid: passwordChecks.haveMinChar}
                                    ].map((check, index) => (
                                        <li key={index}>
                                            <i className={`bi ${check.isValid ? "bi-check-circle-fill" : "bi-x-circle-fill"} me-2`}
                                                style={{ color: check.isValid ? "green" : "red" }}>
                                            </i>
                                            {check.label}
                                        </li>
                                    ))
                                    }
                                </ul>
                        </div>
                    </div>
                </div>
                <div className='text-center my-2'>
                    <Link  to={'/'}>Already have an account? Login Here</Link>
                </div>
            </div>
        </div>
    );
}
