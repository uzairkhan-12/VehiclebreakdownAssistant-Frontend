import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/accounts/Login';
import { Routes , Route} from 'react-router-dom'
import RegisterWithMechanic from './components/accounts/RegisterWithMechanic';
import Register from './components/accounts/Register';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import SkillsList from './components/SkillsList';
import MechanicsList from './components/MechanicsList';
import NeedMechanic from './components/NeedMechanic';
import UserTypeSelection from './components/UserTypeSelection';
import Complains from './components/Complains';
import AddSkill from './components/AddSkill';
import AddMechanicType from './components/AddMechanicType';
import Homepage from './homepage/Homepage';
import ConfirmationMessage from './components/ConfirmationMessage';
import BookMechanic from './components/BookMechanic';
import ResetPassword from './components/accounts/ResetPassword';
import NewPassword from './components/accounts/NewPassword';
function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<Homepage /> }/>
    <Route path='/login' element={<Login />} />
    <Route path='/register-with-mechanic' element={<RegisterWithMechanic />} />
    <Route path="/register" element={<Register />} />
    <Route path="/about-us" element={<AboutUs />} />
    <Route path="/contact-us" element={<ContactUs />} />
    <Route path="/skills-list" element={<SkillsList />} />
    <Route path="/mechanics-list" element={<MechanicsList />} />
    <Route path='/need-mechanic' element={<NeedMechanic />} />
    <Route path='/user-type-selection' element={<UserTypeSelection />} />
    <Route path="/complains-list" element={<Complains />} />
    <Route path="/add-skill" element={<AddSkill />} />
    <Route path="/add-mechanicType" element={<AddMechanicType />} />
    <Route path="/confirmation-message" element={<ConfirmationMessage /> } />
    <Route path="/book-mechanic" element={<BookMechanic />}/>
    <Route path='/reset-password' element={<ResetPassword />} />
    <Route path="/reset-password/:token" element={<NewPassword />}/>
    {/* <Route path="/delete-modal" element={<DeleteModal />} /> */}
    </Routes>
    </div>
  );
}

export default App;
