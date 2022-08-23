import React, { useEffect , useState } from "react";
// import { ToastContainer,toast } from 'react-toastify';
import Navbar from "./Navbar";
import {complainsInterface} from '../interfaces/complains.interface'
import DeleteComplainModal from "./DeleteComplainModal";
import ReplyModal from "./ReplyModal";
function Complains(){
    const [complainsList , setComplainsList] = useState<complainsInterface[]>([])
    useEffect(() => {
        getComplains()
    },[])

    async function getComplains(){
        let response = await fetch('http://localhost:5000/get-complains')
        let result = await response.json()
        // console.log(result)
        setComplainsList(result)
    }
    function handleonClick(){
        getComplains()
    }

    return (
        <div>
            {/* <ToastContainer  position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
/> */}
            <Navbar />
            {/* {idvalue &&  <Modal idvalue ={idvalue} /> } */}
            {complainsList && complainsList.map((item => {

                 return <div key={item._id} style={{ marginTop: 60 }}> 
                   
                    <div className="container" >
                        <div className="alert alert-success" role="alert" style={{ paddingBottom: 60 }}>

                            <h4 className="alert-heading">{item.name}</h4>
                            <p>{item.message}</p>
                            <hr />
                            <a>{item.email}</a>
                            <td><ReplyModal prop={item._id} email={item.email}/></td>
                            <DeleteComplainModal prop={item._id} onDelete = {handleonClick} />
                            {/* <Modal key={item.id} email={item.email}  />  */}
                            {/* <ReplyModal email={item.email} />           */}
                            {/* <ReplyModal /> */}
            {/* onClick={()=>idHandler(item.id)} */}
            {/* className="btn btn-primary" style={{marginRight : 20 , float : "right"}}>Reply</button> */}
                            {/* <div>
                                <button onClick={() => idHandler(item.id)}
                                    type="button" className="btn btn-primary" style={{ marginRight: 20, float: "right" }} data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Reply</button>
                                <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <form>
                                                    <div className="mb-3">
                                                        <label className="col-form-label">Recipient:</label>
                                                        <input type="email" value={tempEmail} className="form-control" id="recipient-name" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="col-form-label">Message:</label>
                                                        <textarea className="form-control" id="message-text"></textarea>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Send message</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            */}
                        </div>
                    </div>
                </div> 
             }))}




         </div>
    )
}


export default Complains