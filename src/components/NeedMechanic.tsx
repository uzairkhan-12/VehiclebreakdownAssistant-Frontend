import React, { useEffect, useState, ChangeEvent } from "react";
import Navbar from "./Navbar";
import { mechanicTypeInterface } from '../interfaces/mechanicType.interface'
import { activeMechanicInterface } from '../interfaces/ativeMechanics.interface'
function NeedMechanic() {
    const [mechanicType, setMechanicType] = useState<mechanicTypeInterface[]>([])
    const [latitude, setLatitude] = useState<number>(0);
    const [longitude, setLongitude] = useState<number>(0);
    const [mechanicTypeName, setMechanicTypeName] = useState<string>("")
    const [mechanicTypeError, setMechanictypeError] = useState<boolean>(false);
    const [activeMechanics, setActiveMechanics] = useState<activeMechanicInterface[] | []>([]);
    const [show , setShow] = useState(false)
    const [error , setError] = useState(false)
    useEffect(() => {
        getMechanicType()
        getLocation()
    }, [])
    async function getMechanicType() {
        let response = await fetch('http://localhost:5000/get-mechanic-types')
            .then(response => response.json())
            .then(data => setMechanicType(data))
    }
    console.log(mechanicType)

    async function findActiveMechanics() {
        setShow(false)
        // let newArr = activeMechanics.filter(x=>  x.email == "a")
        // console.log("new array ")
        // // setActiveMechanics(newArr)
        if (!mechanicTypeName) return setMechanictypeError(true)
        let response = await fetch('http://localhost:5000/need-mechanic', {
            method: "post",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                latitude: Math.floor(latitude),
                longitude: Math.floor(longitude),
                mechanicTypeName
            })
        })
        let result = await response.json()
        if(response.ok){
            setActiveMechanics(result)
            if(result.length === 0 ) return setError(true), setShow(false)
            if(result.length !== 0) return setShow(true) 
        }
    }

    const onUserChange = (input: ChangeEvent<HTMLSelectElement>) => {
        // setMechanicError(false)
        //let arr:IMechanicType[]=[...mechanictype,{id:0,isActive:true,mechanicTypeName: input.target.value}];
        setMechanicTypeName(input.target.value);
        // console.log(mechanicTypeName)
        setMechanictypeError(false)
        setError(false)
        setShow(false)
    }

    function getLocation() {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude((position.coords.latitude))
            setLongitude(position.coords.longitude)
        })
    }

    return (
        <div>
            <Navbar />
            <div>
                <div className="aboutUs-div" style={{ marginTop: "150px" }}>

                    <section className='container-fluid bg'>

                        <section className='row justify-content-center'>

                            <section className='col-12 col-sm-6 col-md-4'>
                                {/* {confirmationMessage && <div className='alert alert-success'>Congratulations! Your Message has been sen</div>} */}
                                <form className='form-container'>
                                    <h5 style={{ textAlign: "center" }}>Calling Mechanic</h5>
                                    <div className="row">
                                        {error && <div className="alert alert-danger">There is no registered mechanic near you</div>}
                                        <div className='mb-2 mt-4'>
                                            <label className="form-label">Which type of mechanic you Need?</label>
                                            {mechanicTypeError && <div className='alert alert-danger'>Please Select Mechanic Type</div>}
                                            <select className="form-control" onChange={onUserChange}>
                                                <option value="default">Choose...</option>
                                                {mechanicType.map((item) => <option key={item._id} value={item.mechanicType}>{item.mechanicType}</option>
                                                )}
                                            </select>
                                        </div>

                                        <div className="d-grid gap-2 mt-3">
                                            <button onClick={findActiveMechanics} className="btn btn-success mt-1" type="button">Find</button>
                                        </div>
                                    </div>
                                    {/* </div> */}
                                </form>


                            </section>
                        </section>
                    </section>
                </div>
            </div>

            <div className="row" style={{marginTop:50}}>
            {activeMechanics.length === 0 ? error && <div></div> : 
            show && activeMechanics?.map(item => {
                return <div className="col-md-3">
                        <div className="card newscardsdiv">
                            <div className='newscardspicdiv'>
                                <img className="card-img-top pic1newscards" src={item.pic} alt="Card image cap" />

                            </div>
                            <div className="card-body">
                                <h5 className="card-title mt-3 cardsheadingnewscards">Name : {item.name}</h5>
                                <p className="card-text">Experience : {item.experience}</p>
                                <p className="card-text">Mechanic type : {item.mechanicTypeName}</p>
                                <p className="card-text">Contact Number : {item.contactNumber}</p>
                                <p>Workshop opening time : {item.workshopOpeningTime}</p>
                                <p>Workshop closing time : {item.workshopClosingTime}</p>
                                <p>Address : {item.workshopAddress}</p>
                                <p>City : {item.city}</p>
                                <div>
                                <p>Skills : </p></div>
                                {item.skills.map(x=> {
                                    return(<span className="badge bg-secondary" style={{ marginRight: 4 }}>{x.skill}</span>)
                                })}

                            </div>
                        </div>
                    </div>
                    
                 })}
                 </div>
                </div>
                  
                    
           
    )
            }

            export default NeedMechanic