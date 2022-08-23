import { setDefaultResultOrder } from 'dns/promises';
import React, { ChangeEvent, useState ,memo} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function EditMechanicTypeModal(prop:any) {
    console.log(prop.prop)
  const [show, setShow] = useState(false);
    let [mechanicType , setMechanicType] = useState<string>()
    const[emptyError , setEmptyError] = useState<boolean>(false)
    const [error , setError] = useState<boolean>(false)
  const handleClose = () => {
    setShow(false)
    setError(false)
    setEmptyError(false)
  }
  const handleShow = () => setShow(true);
  async function updateMechanicType(){
    if(!mechanicType) return setEmptyError(true)
    mechanicType = mechanicType?.trim()
      let response = await fetch("http://localhost:5000/udpate-mechanic-type/" + prop.prop,{
        method:"put",
        headers : {'Content-Type' : 'application/json'},
        body:JSON.stringify({
            mechanicType
        })
      })
     if(response.ok){
      handleClose()
        prop.onEdit()
     }
     if(!response.ok){
      return setError(true)
     }

  }
  const onMechanicTypeChange = (input: ChangeEvent<HTMLInputElement>) => {
    setMechanicType(input.currentTarget.value)
    setError(false)
    setEmptyError(false)
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {emptyError && <div className="alert alert-danger">Please add a mechanic type</div>}
            {error && <div className='alert alert-danger'>Given mechanic type already exist</div>}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Add Mechanic type</Form.Label>
              <Form.Control 
                onChange={onMechanicTypeChange}
                type="text"
                placeholder={prop.value}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateMechanicType}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default memo(EditMechanicTypeModal)