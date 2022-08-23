import React, {ChangeEvent, useState} from "react";
import { useNavigate , useParams } from "react-router-dom";


function NewPassword(){
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [nameError, setNameError] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState<boolean>(false)
    const [emailExistMessage, setEmailExistMessage] = useState<boolean>(false);
    const [isEmailValid, setEmailValid] = useState(false);
    const [passwordMatchError, setPasswordMatchError] = useState(false)
    const [confirmationMessage , setConfirmationMessage] = useState(false)
    const [error ,setError] = useState(false)
    let navigate = useNavigate()
   const { token } = useParams()
   console.log(token)
    const onPasswordChange = (input: ChangeEvent<HTMLInputElement>) => {
        setPassword(input.target.value)
        setPasswordError(false)
        setError(false)
        console.log(password);
    }


    const onConfirmPasswordChange = (input: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(input.target.value)
        setConfirmPasswordError(false)
        setError(false)
        console.log(confirmPassword);
    }
    

    async function updatePassword() {
        let response = await fetch('http://localhost:5000/new-password',{
            method:"post",
            headers:{
                "Content-Type":"Application/json"
            },
            body:JSON.stringify({
                password,
                token
            })
        })
        if(response.ok)
        {
            setTimeout(() => {
                setConfirmationMessage(true)
            },3000)
            navigate('/login')
        }
        else{
            setError(true)
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
    return(
        <div>
        <div>
            <div className="aboutUs-div" style={{ marginTop: "150px" }}>

                <section className='container-fluid bg'>

                    <section className='row justify-content-center'>

                        <section className='col-12 col-sm-6 col-md-4'>
                            <form className='form-container'>
                            {confirmationMessage && <div className="alert alert-success">Password updated successully</div>}
                            {error && <div className="alert alert-danger">Something went wrong please try again later</div>}
                            <h4 style={{color : "green", marginLeft : 45 , marginBottom : 10}}>Vehicle Breakdown Assistant</h4>
                            
                                <div className="row">

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
                                        <button onClick={updatePassword} className="btn btn-success mt-1" type="button">Update Password</button>
                                    </div>
                                </div>
                                {/* </div> */}
                            </form>


                        </section>
                    </section>
                </section>
            </div>
        </div>
        
        </div>

    )
}

export default NewPassword