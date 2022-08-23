import { setDefaultResultOrder } from 'dns/promises';
import React, { ChangeEvent, useState ,memo} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function EditSkillModal(prop:any) {
    console.log(prop.prop)
  const [show, setShow] = useState(false);
    let [skill , setSkill] = useState<string>()
    const[emptyError , setEmptyError] = useState<boolean>(false)
    const [error , setError] = useState<boolean>(false)
  const handleClose = () => {
    setShow(false)
    setError(false)
    setEmptyError(false)
  }
  const handleShow = () => setShow(true);
  async function updateSkill(){
    if(!skill) return setEmptyError(true)
    skill = skill?.trim()
      let response = await fetch("http://localhost:5000/edit-skill/" + prop.prop,{
        method:"put",
        headers : {'Content-Type' : 'application/json'},
        body:JSON.stringify({
            skill
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
  const onSkillChange = (input: ChangeEvent<HTMLInputElement>) => {
    setSkill(input.currentTarget.value)
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
            {emptyError && <div className="alert alert-danger">Please add a skill</div>}
            {error && <div className='alert alert-danger'>Given skill already exist</div>}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Add Skill</Form.Label>
              <Form.Control 
                onChange={onSkillChange}
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
          <Button variant="primary" onClick={updateSkill}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default memo(EditSkillModal)