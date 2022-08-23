import React,  { useState ,memo ,ChangeEvent } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ReplyModal(prop:any) {
  // console.log(prop)
  const [show, setShow] = useState(false);
  const [message , setMessage ] = useState<string>()
  const [messageError , setMessageError] = useState<boolean>(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const onMessageChange = (input :ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(input.target.value)
    setMessageError(false)
  }
  async function Replying(){
    if(!message) return setMessageError(true)
    let response = await fetch('http://localhost:5000/replying-complains',{
      method:"post",
      headers:{
        "Content-Type":"Application/json"
      },
      body:JSON.stringify({
        email:prop.email,
        message
      })
    })
    if(response.ok){
      console.log("message sent")
      handleClose()
    }
    else{
      console.log("error")
    }
  }
  return(
    <div>
      <Button style={{marginTop : 1, float : "right" ,marginRight : 5}} className='btn btn-primary'  onClick={handleShow}>
        Reply
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Replying To</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <p>{prop.email}</p>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              {messageError && <div className="alert alert-danger">please enter message</div>}
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={onMessageChange}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={Replying}>
            Send Message
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default memo(ReplyModal)