import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router} from 'react-router-dom';
import Home from './Pages/Home';
import React from 'react';
import Footer from './Components/Footer';


const App = () => {
  const isLoggedIn = true; 
  const username = 'John Doe'; 

  return (
  <>
    <Router>
      <Navbar isLoggedIn={isLoggedIn} username={username} />
      {/* Rest of your app content */}
      <Home/>
      <Footer/>
    </Router>
  </>
  );
};

export default App;

