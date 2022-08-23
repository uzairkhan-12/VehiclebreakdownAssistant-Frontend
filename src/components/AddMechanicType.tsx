import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
function AddMechanicType(){
    const [mechanicType , setMechanicType] = useState<string>('')
    const [mechanicError , setSMechanicError] = useState<boolean>(false)
    const [error , setError] = useState<boolean>(false)
    let navigate = useNavigate()

    const onSkillChange = (input: React.FormEvent<HTMLInputElement>) => {
        setMechanicType(input.currentTarget.value)
        setSMechanicError(false)
        setError(false)
    }


    async function addMechanicType(){
        if(mechanicType === '') return setSMechanicError(true)
       let response = await fetch('http://localhost:5000/add-mechanic-type',{
        method:"POST",
        headers:{
            "Content-Type":"Application/json"
        },
        body:JSON.stringify({
            mechanicType 
        })
    })
    if(response.ok){
      navigate('/mechanics-list')
    }
    else{
        setError(true)
    }
    }
    return(
        <div>
            <Navbar />
            <div style={{marginTop:"200px"}}>
            <section className='container-fluid bg'>
            <section className='row justify-content-center'>
            <section className='col-12 col-sm-6 col-md-4'>
            <form className='form-container'>

           
            <div className="mb-2">
                {error && <div className="alert alert-danger">Mechanic Type already exist</div>}
                {mechanicError && <div className="alert alert-danger">Please add Mechanic Type</div>}
            <label  className="form-label">Add Mechanic Type</label>
            <input onChange={onSkillChange} type="text" className="form-control" id="skillid" aria-describedby="emailHelp"/>
        </div>
       
      
        {/* <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Remember me</label>
        </div> */}
        <div className="d-grid gap-2">
        <button className="btn btn-success" type="button" onClick={addMechanicType}>Add</button>
        </div>
      
     
        </form>
        </section>
            </section>
            </section>
        </div>

        </div>
    )
}
export default AddMechanicType