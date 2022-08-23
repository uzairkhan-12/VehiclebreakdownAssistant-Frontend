import React from 'react'
import Navbar from '../components/Navbar'
import Buttonfixed from './buttonfixed/Buttonfixed'
import Collaborates from './collaborates/Collaborates'
import Distributes from './distributes/Distributes'
import CardsSlider from './expertiseCard/CardsSlider'
import Footer from './footer/Footer'
import MechanicsCard from './newscards/MechanicsCard'
import NewsCards from './newscards/MechanicsCard'
import Slider from './slider/Slider'

// const Homepage = (isMechanics : boolean) => {
  const Homepage = () => {
    console.log(localStorage.getItem("name"));
    console.log(localStorage.getItem("token"));
  return (

    <div className=''>
      <Navbar />
   
     <Slider/>
     {/* <Buttonfixed/> */}
     <Collaborates/>
     <Distributes/>
     <MechanicsCard/>
     {/* <CardsSlider/> */}
     <Footer/>
     <div className='row mt-3'>
       <div className='col-md-8'>
     
     </div>
     {/* <div className='col-md-4'> */}
     {/* <button className='btn btn-primary ' style={{float : "right"}}>Update Profile</button> */}
     {/* </div> */}
    </div>
    </div>
  )
}

export default Homepage
