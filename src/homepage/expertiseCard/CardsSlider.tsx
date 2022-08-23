import React from 'react';
import './CardsSlider.css'
import pic1 from '../../assets/images/ac3.svg'
import pic2 from '../../assets/images/ac2.svg'
import pic3 from '../../assets/images/ac.svg'

const CardsSlider = () => {
  return <div>
<div className='container'>
            <div className='row'>
                <h1 className='cardsslidertext'>What our customer saying about us</h1>
            </div>
          <div className='row'>
          <div className='col-lg-4 col-sm-12 col-md-6 col-xs-12'>
          <div className="card cardsliderdiv">
              <div className='cardsliderpicdiv'>
              {/* <img  className="card-img-top pic1cardslider" src={pic1} alt="Card image cap" /> */}

              </div>
              <div className="card-body">
                  {/* <h5 className="card-title mt-3">Virtualization Solutions</h5> */}

<br/>
{/* <br/>                  <p className="card-text">Many IT organizations deploy servers that are only running at a fraction of their capacity, */}
                   {/* often because they are dedicating…</p> */}
                  
              </div>
          </div>
      </div>
      <br/>
      <div className='col-lg-4 col-sm-12 col-md-6 col-xs-12'>
          <div className="card cardsliderdiv">
              <div className='cardsliderpicdiv'>

              {/* <img className="card-img-top pic1cardslider" src={pic2} alt="Card image cap" /> */}
              </div>
              <div className="card-body">
                  {/* <h5 className="card-title mt-3">Premium IT AMC Support</h5> */}
  
  <br/>
  {/* <br/>                <p className="card-text">Every company that takes advantage of IT and cloud */}
                   {/* infrastructure to run their business needs a proactive reliable and experienced…</p> */}
                 
              </div>
          </div>
      </div>
      <br/>
      <div className='col-lg-4 col-sm-12 col-md-6 col-xs-12'>
      <div className="card cardsliderdiv">
          <div className='cardsliderpicdiv'>

          {/* <img className="card-img-top pic1cardslider" src={pic3} alt="Card image cap" /> */}
          </div>
          <div className="card-body">
              {/* <h5 className="card-title mt-3">Cloud Managed Networking</h5> */}

<br/>
{/* <br/>              <p className="card-text">Cloud-managed networking is a way of managing and controlling a */}
               {/* business network remotely through resources in the cloud, rather than…</p> */}
              
          </div>
      </div>
  </div>          
        </div>
        </div>
  </div>;
};

export default CardsSlider;
