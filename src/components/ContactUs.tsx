import React, { useState, ChangeEvent } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
// import validator from 'validator';
function ContactUs(){
    const [name , setName] = useState<string>("");
    const [email , setEmail] = useState<string>("");
    const [description , setDescription] = useState<string>("")
    const [nameError , setNameError] = useState<boolean>(false);
    const [emailError , setEmailError] = useState<boolean>(false);
    const [isEmailValid, setEmailValid] = useState(false);
    const [descriptionError , setDescriptionError] = useState(false);
    const [confirmationMessage , setConfirmationMessage] = useState(false);

    let navigate = useNavigate();
    async function AddComplain(){
        if(!checkNameError() || !checkEmailError() || !checkDescriptionError())
        {
            return;
        }
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            return setEmailValid(true)
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "name": name, "email": email , "message" : description })
        }
        let response = await fetch('http://localhost:5000/add-complain', requestOptions)
        if(response.ok){
            // let result = await response.json();
            // console.log(result);
            setConfirmationMessage(true);
            navigate('/confirmation-message')
        }
        else{
            console.log('error');
        }
    }

    const onNameChange = (input: ChangeEvent<HTMLInputElement>) => {
        setName(input.target.value)
        setNameError(false)
    }

    const onEmailChange = (input: ChangeEvent<HTMLInputElement>) => {
        setEmail(input.target.value)
        setEmailError(false)
        setEmailValid(false)
    }
    const onDescriptionChange = (input : ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(input.target.value)
        setDescriptionError(false)
    }
    function checkEmailError(){
        if(email){
            setEmailError(false)
            return true
        }
        else{
            setEmailError(true)
            return false
        }
    }

    function checkNameError(){
        if(name){
            setNameError(false)
            return true
        }
        else{
            setNameError(true)
            return false
        }
    }

    function checkDescriptionError(){
        if(description){
            setDescriptionError(false)
            return true
        }
        else{
            setDescriptionError(true)
            return false
        }
    }

    return(
        <div>
        <Navbar />
        <div>
        <div className="aboutUs-div" style={{marginTop : "100px"}}>
        
        <section className='container-fluid bg'>
        
        <section className='row justify-content-center'>
        
        <section className='col-12 col-sm-6 col-md-6'>
        {confirmationMessage && <div className='alert alert-success'>Congratulations! Your Message has been sen</div>}
        <form className='form-container'> 
        <h5 style={{textAlign : "center"}}>Contact Us</h5>
        <div className="row">
        <div className="col-md-6 mt-3">
            <div className="row">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
<path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>
        <p className="mt-2" style={{textAlign : "center"}}>+92311 888 94 81</p>
        </div>
<br />
<br />
        <div className="row">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg>
        <a href="www.gmail.com" className="mt-2" style={{textAlign : "center"}}>pk.uzikhan@gmail.com</a>
        </div>
<br />
<br />
        <div className="row">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-skype" viewBox="0 0 16 16">
<path d="M4.671 0c.88 0 1.733.247 2.468.702a7.423 7.423 0 0 1 6.02 2.118 7.372 7.372 0 0 1 2.167 5.215c0 .344-.024.687-.072 1.026a4.662 4.662 0 0 1 .6 2.281 4.645 4.645 0 0 1-1.37 3.294A4.673 4.673 0 0 1 11.18 16c-.84 0-1.658-.226-2.37-.644a7.423 7.423 0 0 1-6.114-2.107A7.374 7.374 0 0 1 .529 8.035c0-.363.026-.724.08-1.081a4.644 4.644 0 0 1 .76-5.59A4.68 4.68 0 0 1 4.67 0zm.447 7.01c.18.309.43.572.729.769a7.07 7.07 0 0 0 1.257.653c.492.205.873.38 1.145.523.229.112.437.264.615.448.135.142.21.331.21.528a.872.872 0 0 1-.335.723c-.291.196-.64.289-.99.264a2.618 2.618 0 0 1-1.048-.206 11.44 11.44 0 0 1-.532-.253 1.284 1.284 0 0 0-.587-.15.717.717 0 0 0-.501.176.63.63 0 0 0-.195.491.796.796 0 0 0 .148.482 1.2 1.2 0 0 0 .456.354 5.113 5.113 0 0 0 2.212.419 4.554 4.554 0 0 0 1.624-.265 2.296 2.296 0 0 0 1.08-.801c.267-.39.402-.855.386-1.327a2.09 2.09 0 0 0-.279-1.101 2.53 2.53 0 0 0-.772-.792A7.198 7.198 0 0 0 8.486 7.3a1.05 1.05 0 0 0-.145-.058 18.182 18.182 0 0 1-1.013-.447 1.827 1.827 0 0 1-.54-.387.727.727 0 0 1-.2-.508.805.805 0 0 1 .385-.723 1.76 1.76 0 0 1 .968-.247c.26-.003.52.03.772.096.274.079.542.177.802.293.105.049.22.075.336.076a.6.6 0 0 0 .453-.19.69.69 0 0 0 .18-.496.717.717 0 0 0-.17-.476 1.374 1.374 0 0 0-.556-.354 3.69 3.69 0 0 0-.708-.183 5.963 5.963 0 0 0-1.022-.078 4.53 4.53 0 0 0-1.536.258 2.71 2.71 0 0 0-1.174.784 1.91 1.91 0 0 0-.45 1.287c-.01.37.076.736.25 1.063z"/>
</svg>
<p className="mt-2" style={{textAlign : "center"}}>XYZ</p>
        </div>

        </div>
        <div className='col-md-6'>
        <div className="mb-2">
                    {nameError && <div className='alert alert-danger'>Name is required</div>}
            <label className="form-label">Name</label>
            <input onChange={onNameChange} type="name" className="form-control" id="name" aria-describedby="name"/>
        </div>
            
            <div className="mb-2">
            {emailError && <div className='alert alert-danger'>Email is required</div>}
            {isEmailValid && <div className='alert alert-danger'>Please Enter the valid Email</div>}
           
            <label className="form-label">Email address</label>
            <input onChange={onEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
    <div className="mb-2">
        {descriptionError && <div className='alert alert-danger'>Description is required</div>}
        {/* <label for="message" class="form-label">Your Message</label> */}
        <textarea onChange={onDescriptionChange} className="form-control" id="message" aria-describedby="message" placeholder="Please Enter your message here"/>
    </div>
    <div className="d-grid gap-2 mt-3">
    <button onClick={AddComplain} className="btn btn-success mt-4" type="button">Send</button>
    </div>
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


export default ContactUs