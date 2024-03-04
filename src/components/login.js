'use client'
import style from '../app/Login.module.css';
import {useState} from 'react' ;
function Login() {
    
    return(
        <div className={`${style.body} border `}>
            <div className='d-flex '>
                <div className='col-6 my-5 p-5'>
                    <h1 className='text-center my-5 text-success'>Login</h1>
                    <div className='mb-3 p-2'>
                        <label className='form-label'>
                            Email
                        </label>
                        <input placeholder='Email' className='form-control'></input>
                    </div>
                    <div className='mb-3 p-2'>
                        <label className='form-label'>
                            Password
                        </label>
                        <input placeholder='Password' className='form-control'></input>
                    </div>
                    <div className='mb-3 p-2'>
                        <button className='btn btn-success form-control'>Login</button>
                    </div>
                    <small className='text-center'>If you dont have an account yet <a className='text-secondary'>Sign Up Here</a></small><br/>
                    <small className='text-center'><a className='text-success text-center'>Forgot Password???</a></small>
                </div>
                <div className={`${style.h} col-7 `}>
                    <div className='text-white'>
                        <div className={style.image} >
                            <h2 className={style.text}>Login</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login