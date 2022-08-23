import React from "react";
import Button from 'react-bootstrap/Button';
import { useState , memo } from "react";
import {Modal} from 'react-bootstrap'

function DeleteComplainModal(prop:any){
    // console.log(prop.prop)
    // console.log('abc')
    const [show, setShow] = useState(false);
    const handleClick=()=>{
      setShow(true)
     
  }

  async function deleteComplain(prop: any) {
    console.log(prop.prop)
    let response = await fetch("http://localhost:5000/delete-complain/" + prop.prop, {
      method: 'Delete',
      headers: {
        "Content-Type": "application/json"
      },
      body: null
    })
    if (response.ok) {
      prop.onDelete()
      setShow(false)
    }
    else {
      console.log("something went wrong")
      console.log('error')
    }
  }
    return(
        <div>
          <button style={{marginTop : 1, float : "right" ,marginRight : 5}} className="btn btn-danger" onClick={handleClick}>
          Delete
        </button>
        
        <Modal show={show}>
          <Modal.Header closeButton onClick={() => setShow(false)}>
            <h3>Do you really want to delete?</h3>
          </Modal.Header>
          <Modal.Footer>
            <button className="btn btn-secondary" onClick={() => setShow(false)}>
              Close
            </button>
            <button  className="btn btn-danger" onClick={() => deleteComplain(prop)}>
              Delete
            </button>
          </Modal.Footer>
        </Modal>
        </div>
    )
}

export default memo(DeleteComplainModal)