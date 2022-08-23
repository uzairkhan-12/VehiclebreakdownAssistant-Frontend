import React from 'react'
import './Buttonfixed.css'
import { useNavigate  } from 'react-router-dom'

const Buttonfixed = () => {
  let navigation = useNavigate();

  function needMechanic(){
    navigation('/need-mechanic')
  }
  return (
    <div className='contianer fixed-bottom'>
        <div className='buttonfixedbtndiv'>
           <button onClick={needMechanic}  className='buttonfixedbtndivbtn'>
               Go!
               </button> 
        </div>
    </div>
  )
}

export default Buttonfixed