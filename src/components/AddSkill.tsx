import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
function AddSkill(){
    const [skill , setSkill] = useState<string>('')
    const [skillError , setSkillError] = useState<boolean>(false)
    const [error , setError] = useState<boolean>(false)
    let navigate = useNavigate()

    const onSkillChange = (input: React.FormEvent<HTMLInputElement>) => {
        setSkill(input.currentTarget.value)
        setSkillError(false)
        setError(false)
    }


    async function addSkill(){
        if(skill == '') return setSkillError(true)
       let response = await fetch('http://localhost:5000/add-skill',{
        method:"POST",
        headers:{
            "Content-Type":"Application/json"
        },
        body:JSON.stringify({
           skill 
        })
    })
    if(response.ok){
      navigate('/skills-list')
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
                {error && <div className="alert alert-danger">Skill already exist</div>}
                {skillError && <div className="alert alert-danger">Please add skill</div>}
            <label  className="form-label">Add Skill</label>
            <input onChange={onSkillChange} type="text" className="form-control" id="skillid" aria-describedby="emailHelp"/>
        </div>
       
      
        {/* <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Remember me</label>
        </div> */}
        <div className="d-grid gap-2">
        <button className="btn btn-success" type="button" onClick={addSkill}>Add</button>
        </div>
      
     
        </form>
        </section>
            </section>
            </section>
        </div>

        </div>
    )
}
export default AddSkill