import React from "react";
import Button from 'react-bootstrap/Button';
import { useState , memo } from "react";
import {Modal} from 'react-bootstrap'

function MechanicTypeDeleteModal(prop:any){
    const [show, setShow] = useState(false);
    const handleClick=()=>{
      setShow(true)
     
  }

  async function deleteSkill(prop: any) {
    console.log(prop.prop)
    let response = await fetch("http://localhost:5000/delete-mechanic-type/" + prop.prop, {
      method: 'Delete',
      headers: {
        "Content-Type": "application/json"
      },
      body: null
    })
    if (response.ok) {
      prop.onDelete()
      console.log('skill deleted successfully')
      setShow(false)
    }
    else {
      console.log("something went wrong")
      console.log('error')
    }
  }
    return(
        <div>
          <td><button style={{marginTop : 1,float : "right",marginRight : 5}} className="btn btn-danger" onClick={handleClick}>
          Delete
        </button>
        </td>
        <Modal show={show}>
          <Modal.Header closeButton onClick={() => setShow(false)}>
            <h3>Do you really want to delete?</h3>
          </Modal.Header>
          <Modal.Footer>
            <button className="btn btn-secondary" onClick={() => setShow(false)}>
              Close
            </button>
            <button  className="btn btn-danger" onClick={() => deleteSkill(prop)}>
              Delete
            </button>
          </Modal.Footer>
        </Modal>
        </div>
    )
}

export default memo(MechanicTypeDeleteModal)