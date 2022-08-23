
import React from 'react'
import { useState , ChangeEvent , useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { isTemplateExpression } from 'typescript';
interface IMechanicType {
    id : number;
    mechanicType : string;
   }
   interface ISkills {
       _id:string;
       skill : string
   }


function RegisterWithMechanic(){
    
    const [globalMessage , setGlobalMessage] = useState(false);
    const [name , setName] = useState<string>("");
    const [email , setEmail] = useState<string>("");
    const [isEmailExist , setIsEmailExist] = useState(false)
    const [isEmailError , setIsEmailError] = useState(false)
    const [password , setPassword] = useState<string>("");
    const [confirmPassword , setConfirmPassword] = useState<string>("");
    const [workshopName , setWorkshopName] = useState<string>("");
    const [workshopAddress , setWorkshopAddress] = useState<string>("");
    const [workshopAdressError , setWorkshopAddressError] = useState(false)
    const [openingTime , setOpeningTime] = useState<string>("")
    const [openingTimeError , setOpeningTimeError] = useState(false)
    const [closingTime , setClosingTime] = useState<string>("")
    const [closingTimeError ,setClosingTimeError] = useState(false)
    const [contactNumber , setContactNumber] = useState<string>("")
    const [phoneNumberError , setPhoneNumberError] = useState(false)
    const [workshopNameError , setWorkshopNameError] = useState<boolean>(false)
    const [experience ,setExperience] = useState<string>("")
    const [experienceError , setExperienceError] = useState(false)
    const [nameError , setNameError] = useState<boolean>(false);
    // const [emailError , setEmailError] = useState<boolean>(false);
     const [passwordError , setPasswordError ] = useState<boolean>(false);
    const [confirmPasswordError , setConfirmPasswordError] = useState<boolean>(false)
     const [emailExistMessage , setEmailExistMessage] = useState<boolean>(false);
    const [isEmailValid, setEmailValid] = useState(false);
    const [passwordMatchError , setPasswordMatchError] = useState(false)
    const [mechanictype , setMechanictype] = useState<IMechanicType[] | []>([])
    const [skills , setSkills] = useState<ISkills[] | []>([])
    const [isMechanicError, setMechanicError] = useState<boolean>(false);
    const [mechanicTypeName , setMechanicTypeName] = useState<string>("")
    const [latitude , setLatitude] = useState<any>(0);
    const [longitude , setLongitude] = useState<any>(0);
    const [imageError , setImageError] = useState(false)
    const [positionError , setPosstionError] = useState(false)
    const [skillsError , setSkillsError] = useState(false)
    const [description , setDescription] = useState<string>("")
    const [descriptionError , setDescriptionError] = useState(false)
  const [permissions , setPermissions] = useState<any>([])
  const [url, setUrl] = useState(undefined)
  const [image, setImage] = useState<File>()
  const [city , setCityName] = useState<string>()  
  let navigate = useNavigate()
 

    useEffect(() => {
        if (url) {
            addUser()
        }
    }, [url])


    const postData = () => {
        if (image) {
            uploadPic()
        }
        else {
            addUser()
        }
    }

async function addUser() {
    

    if(!name){
        setNameError(true)
        
      }
      if(!email){
        setIsEmailError(true) 
        
      }
      if(!password)
      {
        setPasswordError(true)
        
      }
      if(!confirmPassword){
        setConfirmPasswordError(true)
      }
      if(!workshopName) {
        setWorkshopNameError(true)
      }
      if(!workshopAddress){
        setWorkshopAddressError(true)
      }
      if(!openingTime) {
        setOpeningTimeError(true)
      } 
      if(!closingTime) {
        setClosingTimeError(true)
      }
      if(!contactNumber){
        setPhoneNumberError(true)
      }
      if(!experience) {
        setExperienceError(true)
      }
      if(!mechanicTypeName){
        setMechanicError(true)
      }
      //image
      //skills
      if(!description){
        setDescriptionError(true)
      }
      if(password != confirmPassword)
      {
        setPasswordMatchError(true)
      }
      if(!name || !email || !password || !confirmPassword || !workshopName || !workshopAddress || !openingTime || !closingTime || !contactNumber || !experience || !mechanicTypeName || !description)
      {
        setGlobalMessage(true)
        return
      }
      if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
        return setEmailValid(true)
    }
     const requestOptions = {
      method : 'POST',
      headers : {'Content-Type' : 'application/json'},
      body : JSON.stringify({"name" : name , "email" : email , "password" : password , "userType": "Mechanic" ,"workshopName" : workshopName,"workshopAddress":workshopAddress,"workshopOpeningTime":openingTime,"workshopClosingTime":closingTime,"contactNumber":contactNumber,"experience":experience, "description":description,"mechanicTypeName" : mechanicTypeName ,"IsMechanic" : true , city , "latitude" : Math.floor(latitude), "longitude" : Math.floor(longitude), "skills":  permissions , pic:url})
     };
     let response = await fetch('http://localhost:5000/register-with-mechanic', requestOptions)
     if(!response.ok)
     {
         setEmailExistMessage(true)
     }
     if(response.ok){
          navigate('/login')
         console.log('user created')
     }
  }



  useEffect(() => {
      getActiveUsers()
      getSkills()
      getLocation()
    },[])
    
    const uploadPic = () => {
        const data = new FormData()

        data.append("file",image as Blob)
        data.append("upload_preset", "insta-clone")
        data.append("cloud_name", "instagramcloude")
        fetch("https://api.cloudinary.com/v1_1/instagramcloude/image/upload", {
            method: "Post",
            body: data,
           
        })
            .then(res => res.json())
            .then(data => {
                setUrl(data.url)
            })
            .catch(err => {
                console.log(err)
            })

    }


      async function getActiveUsers() {
      
        let response = await fetch('http://localhost:5000/get-mechanic-types')
        .then(response => response.json())
        .then(data => setMechanictype(data));
      //    console.log(mechanictype) 
      }
     async function getSkills() {
         let response = await fetch('http://localhost:5000/get-skills')
         .then(response => response.json())
         .then(data => setSkills(data))
     }


  const onNameChange = (input: ChangeEvent<HTMLInputElement>) => {
      setName(input.target.value)
      setNameError(false)
      setGlobalMessage(false)
      console.log(name);
  }

  const onEmailChange = (input: ChangeEvent<HTMLInputElement>) => {
      setEmail(input.target.value)
      setIsEmailError(false)
      setIsEmailExist(false)
      setGlobalMessage(false)
      setEmailExistMessage(false)
      console.log(email);
  }

  const onPasswordChange = (input: ChangeEvent<HTMLInputElement>) => {
      setPassword(input.target.value)
      setPasswordError(false)
      setGlobalMessage(false)
      setPasswordMatchError(false)
      console.log(password);
  }

  const onConfirmPasswordChange = (input: ChangeEvent<HTMLInputElement>) => {
      setConfirmPassword(input.target.value)
      setConfirmPasswordError(false)
      setGlobalMessage(false)
      setPasswordMatchError(false)
      console.log(confirmPassword);
  }

  const onWorkshopNameChange = (input: ChangeEvent<HTMLInputElement>) => {
    setWorkshopName(input.target.value)
    setWorkshopNameError(false)
    console.log(workshopName)
    setGlobalMessage(false)
  }

  const onWorkshopAddressChange = (input: ChangeEvent<HTMLInputElement>) => {
    setWorkshopAddress(input.target.value)
    setWorkshopAddressError(false)
    console.log(workshopAddress)
    setGlobalMessage(false)
  }

  const onCityNameChange = (input : ChangeEvent<HTMLInputElement>) => {
    setCityName(input.target.value)
  }
  const onWorkshopOpeningChange = (input: ChangeEvent<HTMLSelectElement>) => {
    setOpeningTime(input.target.value)
    setOpeningTimeError(false)
    console.log(openingTime)
    setGlobalMessage(false)
  }

  
  const onWorkshopClosingChange = (input: ChangeEvent<HTMLSelectElement>) => {
    setClosingTime(input.target.value)
    setClosingTimeError(false)
    setGlobalMessage(false)
    console.log(closingTime)
  }

  const onPhoneNumberChange = (input:ChangeEvent<HTMLInputElement>) => {
    setContactNumber(input.target.value)
    setPhoneNumberError(false)
    setGlobalMessage(false)
    console.log(contactNumber);
  }

  const onExperienceChange = (input: ChangeEvent<HTMLSelectElement>) => {
    setMechanicError(false)
    //let arr:IMechanicType[]=[...mechanictype,{id:0,isActive:true,mechanicTypeName: input.target.value}];
    setExperience(input.target.value);
    setExperienceError(false)
    console.log(experience)
    setGlobalMessage(false)
  }

  const onUserChange = (input: ChangeEvent<HTMLSelectElement>) => {
      setMechanicError(false)
      //let arr:IMechanicType[]=[...mechanictype,{id:0,isActive:true,mechanicTypeName: input.target.value}];
      setMechanicTypeName(input.target.value);
      setMechanicError(false)
      console.log(mechanicTypeName)
    }

    const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
      const files = (e.target as HTMLInputElement).files || [];
      const files2 = Array.from(files);
      setImage(files2[0]);
    }

    const onDescriptionChange = (input : ChangeEvent<HTMLTextAreaElement>) => {
      setDescription(input.target.value)
      setDescriptionError(false)
    }

    const handleSkills = (event : ChangeEvent<HTMLInputElement>) => {
      var permissions_array = [...permissions];
      if(event.target.checked) {
        permissions_array = [...permissions , event.target.value];
      }
      else{
        permissions_array.splice(permissions.indexOf(event.target.value),1);
      }
      setPermissions(permissions_array)
      console.log(permissions)
    }
  

  
    function getLocation(){
      navigator.geolocation.getCurrentPosition((position) => {
          setLatitude((position.coords.latitude))
          setLongitude(position.coords.longitude)
              // console.log(position.coords.latitude)
              // console.log(position.coords.longitude)
      })   
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
      if (confirmPassword != password) {
        setPasswordMatchError(true)
        return true;
      }
    }


    return(
<div className='mt-5 mb-5'>
            <section className='container-fluid bg'>
            <section className='row justify-content-center'>
            <section className='col-12 col-sm-6 col-md-6'>
            <form className='form-container'>
                
                <div className='singInH5'>
                <div className=''>
            <h4 style={{color : "green", marginLeft : 20 , marginBottom : 10}}>Vehicle Breakdown Assistant</h4>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
                <h4 className='signintext' >Sign up</h4>
                </div>
            
              {globalMessage && <div className='alert alert-danger'>Please Enter the required fields</div>}
              {isEmailValid && <div className='alert alert-danger'>Email is not valid</div>}
              {emailExistMessage && <div className='alert alert-danger'>Email already exist</div>}
              <div className='row'>
                 <div className="mb-2 col-md-6">
                {/* {nameError && <p className='alert alert-danger'>Name is required</p>} */}
            <label className="form-label">Name
            {nameError && <span className='text text-danger'>*</span>}
            </label>
            <input onChange={onNameChange} type="name" className="form-control" id="name" aria-describedby="name" placeholder='Name'/>
        </div>
            {/* is-valid is used to mark a tick symbol and input field become green and is-invalid is used opposite for red...*/}
            <div className="mb-2 col-md-6">
            {/* {isEmailError && <div className='alert alert-danger'>Email is required</div>}
            {isEmailExist && <div className='alert alert-danger'>Email already Exist</div>}
            {isEmailValid && <div className='alert alert-danger'>Please Enter the valid Email</div>} */}
            <label className="form-label">Email address 
            {isEmailError && <span className='text text-danger'>*</span>}
            </label>
            <input onChange={onEmailChange}  type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'/>
        </div>
        </div>



        <div className='row'>
                <div className="mb-2 col-md-6">
            <label className="form-label">Password
            {passwordError && <span className='text text-danger'>*</span>}
            </label>
            <input onChange={onPasswordChange} type="password" className="form-control" id="password" aria-describedby="password" placeholder='Password'/>
        </div>
            
            <div className="mb-2 col-md-6">
            <label className="form-label">Confirm Password
            {passwordMatchError && <span className='text text-danger'>password unmatch</span>}
            {confirmPasswordError && <span className='text text-danger'>*</span>}
            </label>
            <input onChange={onConfirmPasswordChange} onKeyUp={PasswordConfirmation} type="password" className="form-control" id="confirmPassword" aria-describedby="confirmPassword" placeholder='Confirm Password'/>
        </div>
        </div>

       

        <div className='row'>
                <div className="mb-2 col-md-6">
            <label className="form-label">Workshop Name
            {workshopNameError && <span className='text text-danger'>*</span>}
            </label>
            <input onChange={onWorkshopNameChange} type="text" className="form-control" id="workshopName" aria-describedby="workshopName" placeholder='Workshop Name'/>
        </div>
            
            <div className="mb-2 col-md-6">
            <label className="form-label">Workshop Address
            {workshopAdressError && <span className='text text-danger'>*</span>}
            </label>
            <input onChange={onWorkshopAddressChange} type="text" className="form-control" id="workshopAddress" aria-describedby="workshopAddress" placeholder='Workshop Address'/>
        </div>
        </div>

        <div className='row'>
                <div className="mb-2 col-md-6">
            <label className="form-label">Workshop Opening
            {openingTimeError && <span className='text text-danger'>*</span>}
            </label>
            <div className="mb-3">
                        {/* {timeError && <div className='alert alert-danger'>Please select time</div>} */}

                         <select name="time" className="form-select" aria-label="Default select example" onChange={onWorkshopOpeningChange}>
                        <option >Please Select Time</option>
                        <option value="08:00 AM">08:00 AM</option>
                        <option value="08:30 AM">08:30 AM</option>
                        <option value="09:00 AM">09:00 AM</option>
                        <option value="09:30 AM">09:30 AM</option>
                        <option value="10:00 AM">10 : 00 AM</option>
                        <option value="10:30 AM">10 : 30 AM</option>
                        <option value="11:00 AM">11 : 00 AM</option>
                        <option value="11:30 AM">11 : 30 AM</option>
                        <option value="12:00 PM">12 : 00 PM</option>
                        <option value="12:30 PM">12 : 30 PM</option>
                        <option value="01:00 PM">01 : 00 PM</option>
                        <option value="01:30 PM">01 : 30 PM</option>
                        <option value="02:00 PM">02 : 00 PM</option>
                        <option value="02:30 PM">02 : 30 PM</option>
                        <option value="03:00 PM">03 : 00 PM</option>
                        <option value="03:30 PM">03 : 30 PM</option>
                        <option value="04:00 PM">04 : 00 PM</option>
                        <option value="04:30 PM">04 : 30 PM</option>
                        <option value="04:00 PM">04 : 00 PM</option>
                        <option value="04:30 PM">04 : 30 PM</option>
                        <option value="05:00 PM">05 : 00 PM</option>
                        <option value="05:30 PM">05 : 30 PM</option>
                        <option value="06:00 PM">06 : 00 PM</option>
                        <option value="06:30 PM">06 : 30 PM</option>
                        <option value="07:00 PM">07 : 00 PM</option>
                        <option value="07:30 PM">07 : 30 PM</option>
                        <option value="08:00 PM">08 : 00 PM</option>
                        <option value="08:30 PM">08 : 30 PM</option>
                        <option value="09:00 PM">09 : 00 PM</option>
                        <option value="09:30 PM">09 : 30 PM</option>
                        <option value="10:00 PM">10 : 00 PM</option>
                        <option value="10:30 PM">10 : 30 PM</option>
                        <option value="11:00 PM">11 : 00 PM</option>
                        <option value="11:30 PM">11 : 30 PM</option>
                        
                        </select>
                        </div>
        </div>
            
            <div className="mb-2 col-md-6">
            <label className="form-label">Workshop Closing
            {closingTimeError && <span className='text text-danger'>*</span>}
            </label>
            <div className="mb-3">
                        {/* {timeError && <div className='alert alert-danger'>Please select time</div>} */}

                         <select name="time" className="form-select" aria-label="Default select example" onChange={onWorkshopClosingChange}>
                        <option >Please Select Time</option>
                        <option value="08:00 AM">08:00 AM</option>
                        <option value="08:30 AM">08:30 AM</option>
                        <option value="09:00 AM">09:00 AM</option>
                        <option value="09:30 AM">09:30 AM</option>
                        <option value="10:00 AM">10 : 00 AM</option>
                        <option value="10:30 AM">10 : 30 AM</option>
                        <option value="11:00 AM">11 : 00 AM</option>
                        <option value="11:30 AM">11 : 30 AM</option>
                        <option value="12:00 PM">12 : 00 PM</option>
                        <option value="12:30 PM">12 : 30 PM</option>
                        <option value="01:00 PM">01 : 00 PM</option>
                        <option value="01:30 PM">01 : 30 PM</option>
                        <option value="02:00 PM">02 : 00 PM</option>
                        <option value="02:30 PM">02 : 30 PM</option>
                        <option value="03:00 PM">03 : 00 PM</option>
                        <option value="03:30 PM">03 : 30 PM</option>
                        <option value="04:00 PM">04 : 00 PM</option>
                        <option value="04:30 PM">04 : 30 PM</option>
                        <option value="04:00 PM">04 : 00 PM</option>
                        <option value="04:30 PM">04 : 30 PM</option>
                        <option value="05:00 PM">05 : 00 PM</option>
                        <option value="05:30 PM">05 : 30 PM</option>
                        <option value="06:00 PM">06 : 00 PM</option>
                        <option value="06:30 PM">06 : 30 PM</option>
                        <option value="07:00 PM">07 : 00 PM</option>
                        <option value="07:30 PM">07 : 30 PM</option>
                        <option value="08:00 PM">08 : 00 PM</option>
                        <option value="08:30 PM">08 : 30 PM</option>
                        <option value="09:00 PM">09 : 00 PM</option>
                        <option value="09:30 PM">09 : 30 PM</option>
                        <option value="10:00 PM">10 : 00 PM</option>
                        <option value="10:30 PM">10 : 30 PM</option>
                        <option value="11:00 PM">11 : 00 PM</option>
                        <option value="11:30 PM">11 : 30 PM</option>
                        
                        </select>
                        </div>
        </div>
        </div>


        <div className='row'>
                <div className="mb-2 col-md-6">
            <label className="form-label">Contact Number
            {phoneNumberError && <span className='text text-danger'>*</span>}
            </label>
            <input onChange={onPhoneNumberChange} type="tel" className="form-control" id="phoneno" aria-describedby="phoneno" placeholder = "+923XX-XXXXXXX"/>
        </div>
            
            <div className="mb-2 col-md-6">
            <label className="form-label">Experience
            {experienceError && <span className='text text-danger'>*</span>}
            </label>
            
            <select name="experience" className='form-control' id='experience' onChange={onExperienceChange}>
            <option value="default">Choose...</option>
            <option value="1">1 year</option>
            <option value="2">2 years</option>
            <option value="3">3 years</option>
            <option value="4">4 years</option>
            <option value="5">5 years</option>
            <option value="6">6 years</option>
            <option value="7">7 years</option>
            <option value="8">8 years</option>
            <option value="9">9 years</option>
            <option value="10">10 years</option>
            <option value="10+">10+ years</option>
            <option value="15+">15+ years</option>
            <option value="20+">20+ years</option>
      </select>
        </div>
        </div>

        <div className='row'>
        
        <div className="mb-2 col-md-6">
            <label className="form-label">Mechanic Type
            {isMechanicError && <span className='text text-danger'>*</span>}
            </label>
            <select className="form-control" onChange={onUserChange} >
              <option value="default">Choose...</option>
              {mechanictype.map((item) => <option key={item.id} value={item.mechanicType}>{item.mechanicType}</option>
              )}
            </select>
            </div>
            <div className="mb-2 col-md-6">
            <label className="form-label">City Name
            {workshopNameError && <span className='text text-danger'>*</span>}
            </label>
            <input onChange={onCityNameChange} type="text" className="form-control" id="workshopName" aria-describedby="workshopName" placeholder='Workshop Name'/>
        </div>
    </div>    

   <div className='row'>
   <div className="mb-2 col-md-6">
            <div className="custom-file col-md-6 mb-2 mt-2">
    <label className="custom-file-label">Choose your Image</label>
    <input onChange={onImageChange} type="file" className="custom-file-input" id="validatedCustomFile" required />
  </div>
        </div>
      </div>
  
<p>Choose your skills</p>
        <div className='row'>
        <div className="form-check form-check-inline">
  
<div className='row'>
  {skills.map((x) => 
    <div className='col-md-6'>
  <input onChange={handleSkills} style={{marginLeft : 2 , marginRight : 6}} className="form-check-input" type="checkbox" value={x._id} />
  <label className="form-check-label">{x.skill}</label>
  </div>
  )}
  </div>
  </div>
         </div>
        <div className='row'>
        <label>Description 
        {descriptionError && <span className='text text-danger'>*</span>}
        </label>
        <textarea onChange={onDescriptionChange} className="form-control" id="Description" aria-describedby="description" placeholder = "Describe your self and skills" rows={4} cols={30} />
        </div>

       

        <div className="d-grid gap-2 mt-3">
        <button onClick={() => postData()} className="btn btn-success" type="button">Register</button>
        </div>
        
        </form>
        </section>
            </section>
            </section>
        </div>
    )
}
export default RegisterWithMechanic