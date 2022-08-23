import React from 'react'
import './login.css';
import { useState , ChangeEvent} from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
function Login(){
    const [email , setEmail] = useState<string>("");
    const [password , setPassword] = useState<string>("");
    const [emailError , setEmailError] = useState<boolean>(false);
    const [passwordError , setPasswordError] = useState<boolean>(false);
    const [ErrorMessage , setErrorMessage] = useState(false);
    const [SucceededMessage , setSucceededMessage] = useState(false)
    let navigate = useNavigate();
    async function LoggingIn(){
        if(!checkEmailError() || !checkPasswordError() ){
            return
        }
        const requestOptions = {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({email , password})
           };
           let response = await fetch('http://localhost:5000/sign-in', requestOptions)
           const data = await response.json()
           
           if(response.ok){
               setSucceededMessage(true)
               console.log(data.user.name) 
               localStorage.setItem("name",data.user.name) 
                localStorage.setItem("token" , data.token)
                localStorage.setItem("userType" , data.user.userType)
                navigate('/')
           }
           if(!response.ok){
            return setErrorMessage(true)
          }
    }


    



    const onEmailChange = (input: ChangeEvent<HTMLInputElement>) =>{
        setEmail(input.target.value);
        setEmailError(false)
        setErrorMessage(false)
        setSucceededMessage(false)
        console.log(email);
    }
    const onPasswordChange = (input: ChangeEvent<HTMLInputElement>) =>{
        setPassword(input.target.value);
        setPasswordError(false)
        setErrorMessage(false)
        setSucceededMessage(false)
        console.log(password);
    }


    function checkEmailError() {
        if(email){
            setEmailError(false)
            return true
        }
        else{
            setEmailError(true)
            return false
        }
    }
    function checkPasswordError() {
        if(password){
            setPasswordError(false)
            return true
        }
        else{
            setPasswordError(true)
            return false
        }
    } 
   
    return(
        <div className='main-login-div'>
            <section className='container-fluid bg'>
            <section className='row justify-content-center'>
            <section className='col-12 col-sm-6 col-md-4'>
            <form className='form-container'>

                <div className='singInH5'>
                <div className=''>
            <h4 style={{color : "green", marginLeft : 20 , marginBottom : 10}}>Vehicle Breakdown Assistant</h4>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
                <h4 className='signintext' >Sign In</h4>
                </div>
            <div className="mb-2">
            <label  className="form-label">Email address</label>
                {emailError && <div className='alert alert-danger'>Please Enter the Email</div>}
            <input onChange={onEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-2">
            <label  className="form-label">Password</label>
            {passwordError && <div className='alert alert-danger'>Please Enter the Password</div>}
            <input onChange={onPasswordChange} type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div style = {{marginBottom : 5}}>
        <NavLink className='forgotPass' to='/reset-password'>Forgot Password?</NavLink>
            <NavLink className='registerLink' to='/user-type-selection'>Register?</NavLink>
        </div>
        {/* <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Remember me</label>
        </div> */}
        <div className="d-grid gap-2">
        {ErrorMessage && <div className='alert alert-danger'>Please Enter Correct Email or Password</div>}
        {SucceededMessage && <div className='alert alert-success'>Login succeded</div>}
        <button onClick={LoggingIn} className="btn btn-success" type="button">Sign in</button>
        </div>
        <div className='row'>
           <div className='col-sm-5'><hr /></div> <p className='col-md-2 paragraphOr'>or</p>
        
        <div className='col-sm-5'><hr /></div>
        </div>
        <div className="d-grid gap-2">
        <button className="btn btn-outline-success" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
</svg> 
        Sign in with Google
            </button>
        </div><div className="d-grid gap-2">
            <br />
        <button className="btn btn-outline-success" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg>
            Sign in with Facebook</button>
        </div>
        </form>
        </section>
            </section>
            </section>
        </div>
    )
}
export default Login