import React from "react";
import Navbar from "./Navbar";


function AboutUs(){
    return(
        <div>
        <Navbar />
        <div>
        <div className="aboutUs-div " style={{marginTop : "150px"}}>
        
        <section className='container-fluid bg'>
        <section className='row justify-content-center'>
        <section className='col-12 col-sm-6 col-md-6'>
        <form className='form-container'> 
    <div className="main-aboutUs-div d-grid gap-2">
    <p className='about-us-paragraph'>Vehicle Breakdown Assistant is a full service auto repair shop without the shop! Our mobile mechanics service all 
        types of cars and trucks, offering everything from oil changes and tune ups to brake jobs 
        and no-starts. Our ASE certified mechanics can perform most jobs right in your 
    driveway or at your parking spot at work giving you the freedom to spend your time 
    on more important things.
    </p>
    </div><div className="d-grid gap-2">
        <br />
    </div>
    </form>
    </section>
        </section>
        </section>
    </div>
        </div>
    </div>
    )
}

export default AboutUs