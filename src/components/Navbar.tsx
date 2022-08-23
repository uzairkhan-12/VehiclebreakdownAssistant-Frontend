import React from "react";
import { Navigate, NavLink } from 'react-router-dom'


const renderList = () => {
    if(localStorage.getItem("userType") === "Admin"){
        return [
            <>
                        <NavLink to='/'  className="nav-item nav-link">Home</NavLink>
                        <NavLink to='/about-us' className="nav-item nav-link">About Us</NavLink>
                        <NavLink to='/contact-us' className="nav-item nav-link">Contact Us</NavLink>
                        {/* <NavLink to='/addskills' className="nav-item nav-link">Add Skills</NavLink> */}
                        <NavLink to='/skills-list' className="nav-item nav-link">Skills List</NavLink>
                        {/* <NavLink to='/add-mechanic-type' className="nav-item nav-link">Add Mechanic</NavLink> */}
                        <NavLink to='/mechanics-list' className='nav-item nav-link'>Mechanics List</NavLink>
                        <NavLink to='/need-mechanic' className="nav-item nav-link">Need Mechanic</NavLink>
                        <NavLink to='/book-mechanic' className='nav-item nav-link'>Book Mechanic</NavLink>
                        <NavLink to='/complains-list' className="nav-item nav-link">Complains</NavLink>
                        </>
        ]
    
    }
    else if(localStorage.getItem("userType") === "Mechanic"){
        return [
                        <>
                        <NavLink to='/'  className="nav-item nav-link">Home</NavLink>
                        <NavLink to='/about-us' className="nav-item nav-link">About Us</NavLink>
                        <NavLink to='/contact-us' className="nav-item nav-link">Contact Us</NavLink>
                        </>
        ]
    }
    else if(localStorage.getItem("userType") === "Driver" || localStorage.getItem("UserType") === null){
        return [
            <>
             
                         <NavLink to='/'  className="nav-item nav-link">Home</NavLink>
                        <NavLink to='/about-us' className="nav-item nav-link">About Us</NavLink>
                        <NavLink to='/contact-us' className="nav-item nav-link">Contact Us</NavLink>
                        <NavLink to='/need-mechanic' className="nav-item nav-link">Need Mechanic</NavLink>
                        <NavLink to='/book-mechanic' className='nav-item nav-link'>Book Mechanic</NavLink>
                        </>
        ]
    }
    
    else{
        return[
            <div>
            <NavLink to='/' className="nav-item nav-link">Home</NavLink>
            </div>
        ]
    }
}


function Navbar(){

    function logout(){
        localStorage.removeItem("name")
        localStorage.removeItem("token")
        localStorage.removeItem("userType")
    }

    function loginLogout(){
        if(localStorage.getItem("name") == null)
        {
           return <div>
          <NavLink to='/login' style = {{marginRight : 5}} className="btn btn-outline-light" type="submit">Login</NavLink>
          <NavLink to='/user-type-selection' className="btn btn-outline-light" type="submit">Register</NavLink>
          </div>
        }
        else{
             return <NavLink onClick={logout} to='/login' style = {{marginRight : 5}} className="btn btn-outline-light" type="submit">Logout</NavLink>
        }
    
    }

    
    return(
        <>
         <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
                <div className="container-fluid">
                <h4 style={{color : "white", marginRight : 10}}>Vehicle Breakdown Assistant</h4>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse2">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse2">
                        <div className="navbar-nav">
                           {renderList()}
                            </div>
                        <div className="d-flex ms-auto">
                      {
                          loginLogout()
                      }
                        
            
                </div>
                    </div>
                </div>        
            </nav>
      </>
  
    )
}

export default Navbar