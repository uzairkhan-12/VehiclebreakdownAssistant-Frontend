import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Collaborates.css'
import bmw from '../../assets/images/BMW.png'
import alpina from '../../assets/images/alpina.png'
import honda from '../../assets/images/Honda.png'
import mercedes from '../../assets/images/mercedes.png'
import suzuki from '../../assets/images/suzuki.png'
import toyota from '../../assets/images/toyota.png'
import changan from '../../assets/images/changan.png'
const Collaborates = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1100, min: 500 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 499, min: 0 },
      items: 2
    }
  };
  
 
  
  return <div>
    
        <div className='mt-4 pt-2'>
        <Carousel
                swipeable={false}
                draggable={false}
               // showDots={true5
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000}
               // keyBoardControl={true}
                //customTransition="all .5"
                transitionDuration={600}
                
            >

                <div><img className="Collaboratesimage" src={toyota} alt="toyota" /></div>
                <div><img className="Collaboratesimage" src={bmw} alt="bmw" /></div>
                <div>  <img src={alpina} className="Collaboratesimage" alt="alpina" /></div>
                <div>  <img src={honda} className="Collaboratesimage" alt="honda" /></div>
                <div>  <img src={mercedes} className="Collaboratesimage" alt="mercedes" /></div>
                <div>  <img src={suzuki} className="Collaboratesimage" alt="suzuki" /></div>
                <div>  <img src={changan} className="Collaboratesimage" alt="changan" /></div>
             
            </Carousel>
        </div>
  </div>;
};

export default Collaborates;


