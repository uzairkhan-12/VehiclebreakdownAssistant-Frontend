import React from 'react'
import Navbar from './Navbar'
import confirmation from '../assets/images/confirmation.jpg'


function ConfirmationMessage(){
return(
    <div>
        < Navbar />
        <div style={{marginTop : 150}}>
        <img className='rounded mx-auto d-block' src={confirmation} alt="confirmation image" />
        </div>
    </div>
)
}
export default ConfirmationMessage