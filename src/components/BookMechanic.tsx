import React, {ChangeEvent, useState} from "react";
import Navbar from "./Navbar";
import {activeMechanicInterface} from '../interfaces/ativeMechanics.interface'
function BookMechanic(){
    const [city , setCityName] = useState<string>()
    const [cityError ,setCityError] = useState<boolean>(false)
    const [activeMechanics, setActiveMechanics] = useState<activeMechanicInterface[] | []>([]);
    const [error , setError] = useState(false)
   async function findActiveMechanics(){
        if(!city) return setCityError(true)
        let response = await fetch('http://localhost:5000/book-appointment',{
            method:"post",
            headers:{
                "Content-Type":"Application/json"
            },
            body:JSON.stringify({
                city
            })
        })
        let result = await response.json()
       if(response.ok){
        if(result.length === 0) return setError(true)
        setActiveMechanics(result)
    }
    
}
console.log(activeMechanics)
    const onCityChange = (input : ChangeEvent<HTMLInputElement>) =>{
        setCityName(input.target.value)
        setCityError(false)
        setError(false)
    }
    return(
        <div>
        <Navbar />
        <div>
            <div className="aboutUs-div" style={{ marginTop: "150px" }}>

                <section className='container-fluid bg'>

                    <section className='row justify-content-center'>

                        <section className='col-12 col-sm-6 col-md-4'>
                            <form className='form-container'>
                            {error && <div className='alert alert-danger'>There is no registered mechanic in {city}</div>}
                                <h5 style={{ textAlign: "center" }}>Calling Mechanic</h5>
                                <div className="row">

                                <div className="mb-2">
                                    {cityError && <div className='alert alert-danger'>City name is required</div>}
                                    <label className="form-label">Search Mechanic by city</label>
                                    <input onChange={onCityChange} type="city" className="form-control" id="city" aria-describedby="city" />
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
            {activeMechanics?.length === 0 ?  error && <div></div> :
            activeMechanics.map(item => {
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

export default BookMechanic