import React from 'react'
import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
function Register() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [nameError, setNameError] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState<boolean>(false)
    const [emailExistMessage, setEmailExistMessage] = useState<boolean>(false);
    const [isEmailValid, setEmailValid] = useState(false);
    const [passwordMatchError, setPasswordMatchError] = useState(false)
    let navigate = useNavigate();

    async function AddUser() {
        if (!checkNameError() || !checkEmailError() || !checkPasswordError() || !checkConfirmPasswordError()) {
            return
        }
        if (isEmailValid) {
            return;
        }
        if (emailExistMessage) {

            return
        }
        if (!handleConfirmPasswordValidation()) {
            return;
        }
        if (!PasswordConfirmation()) {
            return
        }
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            return setEmailValid(true)
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name , email , password , userType:"Driver"})
        };
        let response = await fetch('http://localhost:5000/register', requestOptions)
        if (!response.ok) {
            console.log('error')
        }
        if (response.ok) {
            navigate('/login');
            console.log('user created')
        }
    }



    const onNameChange = (input: ChangeEvent<HTMLInputElement>) => {
        setName(input.target.value)
        setNameError(false)
        console.log(name);
    }

    const onEmailChange = (input: ChangeEvent<HTMLInputElement>) => {
        setEmail(input.target.value)
        setEmailValid(false)
        setEmailExistMessage(false)
        console.log(email);
    }

    const onPasswordChange = (input: ChangeEvent<HTMLInputElement>) => {
        setPassword(input.target.value)
        setPasswordError(false)
        console.log(password);
    }

    const onConfirmPasswordChange = (input: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(input.target.value)
        setConfirmPasswordError(false)
        console.log(confirmPassword);
    }

    function checkNameError() {
        if (name) {
            setNameError(false)
            return true
        }
        else {
            setNameError(true)
            return false
        }
    }

    function checkEmailError() {
        if (email) {
            setEmailError(false)
            return true
        }
        else {
            setEmailError(true)
            return false
        }
    }
    function checkPasswordError() {
        if (password) {
            setPasswordError(false)
            return true
        }
        else {
            setPasswordError(true)
            return false
        }
    }
    function checkConfirmPasswordError() {
        if (confirmPassword) {
            setConfirmPasswordError(false)
            return true
        }
        else {
            setConfirmPasswordError(true)
            return false
        }
    }

    function checkEmailValid() {
            EmailChecking()
    }


    async function EmailChecking() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        };
        let response = await fetch('http://localhost:5000/check-email-exist', requestOptions)

        if (response.ok) {
            let result = await response.json();
            if (result) {
                setEmailExistMessage(true)
            }
        }
    }

    const handleConfirmPasswordValidation = () => {
        //console.log('working')
        if (confirmPassword !== password) {
            setPasswordMatchError(true)
            return false;
        }
        else {
            setPasswordMatchError(false)
            return true
        }
    }

    function PasswordConfirmation() {
        if (confirmPassword === password) {
            return true;
        }
    }
        return (
            <div className='mt-5'>
                <section className='container-fluid bg'>
                    <section className='row justify-content-center'>
                        <section className='col-12 col-sm-6 col-md-4'>
                            <form className='form-container'>

                                <div className='singInH5'>
                                    <div className=''>
                                        <h4 style={{ color: "green", marginLeft: 20, marginBottom: 10 }}>Vehicle Breakdown Assistant</h4>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                    </svg>
                                    <h4 className='signintext' >Sign up</h4>
                                </div>
                                <div className="mb-2">
                                    {nameError && <div className='alert alert-danger'>Name is required</div>}
                                    <label className="form-label">Name</label>
                                    <input onChange={onNameChange} type="name" className="form-control" id="name" aria-describedby="name" />
                                </div>

                                <div className="mb-2">
                                    {emailError && <div className='alert alert-danger'>Email is required</div>}
                                    {isEmailValid && <div className='alert alert-danger'>Please Enter the valid Email</div>}
                                    {emailExistMessage && <div className='alert alert-danger'>Email already Exist</div>}
                                    <label className="form-label">Email address</label>
                                    <input onChange={onEmailChange} onBlur={checkEmailValid} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-2">
                                    {passwordError && <div className='alert alert-danger'>Password is required</div>}
                                    <label className="form-label">Password</label>
                                    <input onChange={onPasswordChange} type="password" className="form-control" id="exampleInputPassword" />
                                </div>

                                <div className="mb-2">
                                    {confirmPasswordError && <div className='alert alert-danger'>Confirm password is required</div>}
                                    {passwordMatchError && <div className='alert alert-danger'>Password does not match</div>}
                                    <label className="form-label">Confirm Password</label>
                                    <input onKeyUp={handleConfirmPasswordValidation} onChange={onConfirmPasswordChange} type="password" className="form-control" id="exampleInputPassword1" />
                                </div>

                                <div className="d-grid gap-2 mt-3">
                                    <button onClick={AddUser} className="btn btn-success" type="button">Register</button>
                                </div>

                            </form>
                        </section>
                    </section>
                </section>
            </div>
        )
    }

    export default Register