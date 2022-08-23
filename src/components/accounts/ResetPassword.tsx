import React, {ChangeEvent, useState} from "react";
import { useNavigate } from "react-router-dom";
function ResetPassword(){
    const [email , setEmail] = useState<string>()
    const [emailError ,setEmailError] = useState<boolean>(false)
    const [confirmationMessage , setConfirmationMessage] = useState(false)
    const [error , setError] = useState(false)
    let navigate = useNavigate()
   async function addEmail(){
        if(!email) return setEmailError(true)
        let response = await fetch('http://localhost:5000/reset-password',{
            method:"post",
            headers:{
                "Content-Type":"Application/json"
            },
            body:JSON.stringify({
                email
            })
        })
        let result = await response.json()
       if(response.ok){
       setConfirmationMessage(true)
       setTimeout(() => {
           navigate('/login')
       },3000)
       }
       else{
        return setError(true)
    }
    
}
    const onEmailChange = (input : ChangeEvent<HTMLInputElement>) =>{
        setEmail(input.target.value)
        setEmailError(false)
        setError(false)
    }
    return(
        <div>
        <div>
            <div className="aboutUs-div" style={{ marginTop: "150px" }}>

                <section className='container-fluid bg'>

                    <section className='row justify-content-center'>

                        <section className='col-12 col-sm-6 col-md-4'>
                            <form className='form-container'>
                                {confirmationMessage && <div className="alert alert-success">Please check your Gmail</div>}
                            <h4 style={{color : "green", marginLeft : 45 , marginBottom : 10}}>Vehicle Breakdown Assistant</h4>
                            {error && <div className='alert alert-danger'>Email not exist</div>}
                                <div className="row">

                                <div className="mb-2">
                                    {emailError && <div className='alert alert-danger'>Email is required</div>}
                                    <label className="form-label">Please enter your email</label>
                                    <input onChange={onEmailChange} type="city" className="form-control" id="city" aria-describedby="city" />
                                </div>

                                    <div className="d-grid gap-2 mt-3">
                                        <button onClick={addEmail} className="btn btn-success mt-1" type="button">Reset Password</button>
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

export default ResetPassword