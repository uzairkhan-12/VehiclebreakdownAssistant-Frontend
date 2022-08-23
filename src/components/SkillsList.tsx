import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { SkillsInterface } from '../interfaces/skills.interface'
import { useNavigate } from "react-router-dom";
import DeleteModal from "./DeleteModal";
import EditSkillModal from "./EditSkillModal";
function SkillsList() {
  const [skills, setSkills] = useState<SkillsInterface[]>([])
  let navigate = useNavigate()
  let serialNumber: number = 1
  useEffect(() => {
     getSkills()
  },[])
  const handleonClick = () => {
    getSkills()
  }
  async function getSkills() {
    let response = await fetch('http://localhost:5000/get-skills')
    let result = await response.json()
    setSkills(result)
  }


  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='main-login-div' style={{ marginTop: "100px" }}>
        <section className='container-fluid bg'>
          <section className='row justify-content-center'>
            <section className='col-12 col-sm-2 col-md-8'>
              <form onSubmit={e => e.preventDefault()}>
                <button style={{ float: 'right' }} type="button" className="btn btn-primary" onClick={() => navigate("/add-skill")}>Add Skills</button>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">S No</th>
                      <th scope="col">Skills</th>
                      {/* <th scope="col"> Acitve / inActive  </th> */}
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>

                    {skills && skills?.map((x: SkillsInterface) => {
                      return (<tr key={x._id}>
                        <td >{serialNumber++}</td>
                        <td>{x.skill}</td>
                        <td><EditSkillModal prop={x._id} value = {x.skill} onEdit = {handleonClick}/></td>
                        <td><DeleteModal prop={x._id} onDelete = {handleonClick}/></td>
                      </tr>
                      )
                    })}

                  </tbody>
                </table>
              </form>
            </section>
          </section>
        </section>
      </div>

    </div>
  )
}

export default SkillsList