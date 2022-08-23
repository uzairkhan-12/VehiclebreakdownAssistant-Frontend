import React from 'react';
import './Distributes.css'
import picture from '../../assets/images/44.jpg'
import picture21 from '../../assets/images/21.png'
import picture22 from '../../assets/images/22.png'

export default function Distributes() {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row mt-3 pt-4'>
                    <div className='col-sm-6'>
                    <div className='container'>
                        <h1>Vehicle Breakdown Assistant</h1>
                       <p className = "Textattraction">
                        Vehicle Breakdown Assistant's mechanics gives immediate responses to the customers and provides Certified mechanics
                        For Cars, Bikes, Buses , Trucks , Rickshaws and All types of Vehicles
                        You can call a nearest mechanic by one click for Vehicle Repairing when your Vehicle stop on road due to some fault.
                        </p>
                        </div>
                        <div className = 'picturesdistributediv'>
                          <div className='picturepic21'>
                              
                            <img className='img img-fluid' src = {picture21} style={{marginRight : 8}}/>
                        <h6>Partner You Can Trust</h6>
                              </div>
                              <div className='picturepic22'>
                        <img className='img img-fluid' src = {picture22}  style={{marginRight : 8}}/>
                        <div className='piclinktextdistribute'>

                        <h6 >ISO Certified</h6>
                        </div>
                                  </div> 
                            </div>
                            <br/>
                            <br/>
                            <br/>
                    </div>
                    <div className='col-sm-6'>
                    <img className='img img-fluid distributespicmain' src={picture}  style={{width : "100vh" , height : "70vh"}}/>
                    </div>
                
                </div>
            </div>
        </div>
    );
}
