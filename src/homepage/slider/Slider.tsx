import React from 'react'
import { Carousel } from 'react-bootstrap'
import pic1 from '../../assets/images/mech2.jpg'
import pic2 from '../../assets/images/mech3.jpg'
import pic3 from '../../assets/images/a.jpeg'
import pic4 from '../../assets/images/b.jpeg'


const Slider = () => {
  return (
    <div>
        <Carousel fade  className = "container-fluid">       
  <Carousel.Item>
    <img style={{height : "78vh" , width : "100%"}}
   
   className="d-block w-100"
      src={pic1}
      alt="First slide"
    />
   
    <Carousel.Caption>
    <h2>Welcome {localStorage.getItem("name")}!</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height : "78vh" , width : "100%"}}
      className="d-block w-100 sliderpic"
      src={pic2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h2>Welcome {localStorage.getItem("name")}!</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height : "78vh" , width : "100%"}}
      className="d-block w-100 sliderpic"
      src={pic3}
      alt="Third slide"
    />


<Carousel.Caption>
  <div>
    
    <h2>Welcome {localStorage.getItem("name")}!</h2>
    
    </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height : "78vh" , width : "100%"}}
      className="d-block w-100"
      src={pic4}
      alt="Third slide"
    />


    <Carousel.Caption>
    <h2>Welcome {localStorage.getItem("name")}!</h2>
        </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default Slider