import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {

    const [toggle, setToggle] = useState(false)

    const toggleVisibility = ()=>{
        setToggle(!toggle);
    }

    return (
        <>
            <div className='container d-flex justify-content-center align-items-center vh-100'>
                <div className="card w-50 shadow-lg mb-3">
                    <h2 className='card-title text-center mt-2' style={{color:'#0d6efd', fontWeight:'bold'}}>Login</h2>
                    <div className="card-body">
                        <form>
                            <input type='text' className='form-control mt-2' id='userName' placeholder='User Name' />
                            <div className='input-group mt-2'>
                                <input type={toggle ? "text":"password"} className="form-control" placeholder='Password' id="pass"/>
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
                            <div className="d-grid gap-2 mt-4">
                                <button className="btn btn-primary" type="submit">Login</button>
                            </div>
                        </form>
                        <div className='text-center mt-2'>
                            <Link  to={'/register'}>Don't have an account yet? Register Here</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
