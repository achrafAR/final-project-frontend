import "./App.css";
import HomePage from './pages/HomePage.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Header from "./components/Header/Header";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Offers from "./pages/Offers";
import Gallery from './pages/Gallery'
import OfferIndividual from "./pages/OfferIndividual";
import MyBooking from "./pages/MyBooking"
function App() {

  return (
    <Router>
      
      <div className="App">
        <Routes>
          <Route path="/"  element={<HomePage/>} />
          <Route path="/login"  element={<Login/>} />
          <Route path="/aboutUs" element={<AboutUs/>}/>
          <Route path='/contactUs' element={<ContactUs/>}/>
          <Route path='/offers' element={<Offers/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/booking/:userId' element={<MyBooking/>}/>
          <Route path='/offerIndividual/:id' element={<OfferIndividual/>}/>



        </Routes>    
      </div>
    </Router>
    
    
  );
}

export default App;
