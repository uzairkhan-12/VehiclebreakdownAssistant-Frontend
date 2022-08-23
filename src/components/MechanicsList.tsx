import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { mechanicTypeInterface } from "../interfaces/mechanicType.interface";
import MechanicTypeDeleteModal from "./MechanicTypeDeleteModal";
import EditMechanicTypeModal from "./EditMechanicTypeModal";

function MechanicsList(){
  const [mechanicType ,setMechanicType] = useState<mechanicTypeInterface[]>([])
  let serialNumber = 1
  useEffect(() => {
    getMechanicType()
  },[])
  const handleonClick = () => {
    getMechanicType()
  }
  async function getMechanicType(){
    let response = await fetch('http://localhost:5000/get-mechanic-types')
    let result = await response.json()
    setMechanicType(result)
  }

  let navigate = useNavigate()
  function toAddMechanicType(){
    navigate("/add-mechanicType")
  }
    return(
<div>
  <div>
      <Navbar />
      </div>

<div className='main-login-div' style={{marginTop : "100px"}}>
                <section className='container-fluid bg'>
                <section className='row justify-content-center'>
                <section className='col-12 col-sm-2 col-md-8'>
      <form onSubmit={e => e.preventDefault()}>
      <button onClick={toAddMechanicType} style={{float:'right'}} type="button" className = "btn btn-primary">Add Mechanic Type</button>
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
            {/* {skills && skills.map((item  => */}
            
              {/* <tr key={item.id}> */}
                {/* <td>{serialNo = serialNo + 1}</td> */}
                {/* <td>{item.skill} */}
                  <br />
                  
                {/* </td> */}
                {/* <td><button onClick={() => { toggle(item.id) }} type="button" className="btn btn-outline-primary">Toggle</button></td> */}
                {/* <td><button onClick={() => { editData(item.id) }} className="btn btn-primary">Edit</button></td> */}
                {/* <td><button onClick={ () => {deleteData(item.id)} } className="btn btn-danger">Delete</button></td> */}
                {/* <td><button className="btn btn-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) deleteData(item.id) }}>Delete</button></td> */}
              {/* </tr> */}
            {/* ))} */}
            {/* <tr>
      <th scope="row"></th>
      <td></td>
      <td><button className='btn btn-primary'>Edit</button></td>
      <td><button className='btn btn-danger'>Delete</button></td>
    </tr> */}
    {mechanicType && mechanicType.map(item => {
      return(
      <tr key={item._id}>
        <td>{serialNumber ++}</td>
        <td>{item.mechanicType}</td>
        <td><EditMechanicTypeModal prop={item._id} value = {item.mechanicType} onEdit = {handleonClick}/></td>
        <MechanicTypeDeleteModal  prop={item._id} onDelete = {handleonClick}/>
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

export default MechanicsList