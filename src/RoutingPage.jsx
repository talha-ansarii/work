import React from 'react'

import { BrowserRouter as Router,Routes, Route,} from 'react-router-dom';
// import HomePage from "./Pages/HomePage"
import OutletRoute from './components/OutletRoute';
import ServicePage from './Pages/ServicesPages/ServicePage';
import ContactPage from './Pages/ContactPages/ContactPage';
import AboutPage from './Pages/AboutPages/AboutPage';
import LandingPage from './Pages/LandingPage';


function RoutingPage() {

    return (
      <>
      <Router>
          <Routes>      
              <Route path='/' element={<OutletRoute/>}>
              <Route index element={<LandingPage/>}/>
              <Route path='Pages/ServicesPages/ServicePage' element={<ServicePage/>} />
              <Route path='Pages/ContactPages/ContactPage' element={<ContactPage/>} />
              <Route path='Pages/AboutPages/AboutPage' element={<AboutPage/>} />
              </Route>
          </Routes>
      </Router>
      </>
    )
  }
  
  export default RoutingPage