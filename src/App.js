import "./App.css";
import HomePage from './pages/HomePage.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Header from "./components/Header/Header";
import AboutUs from "./pages/AboutUs";
function App() {
  return (
    <Router>
      
      <div className="App">
        <Routes>
          <Route path="/"  element={<HomePage/>} />
          <Route path="/login"  element={<Login/>} />
          <Route path="/aboutUs" element={<AboutUs/>}/>
        </Routes>    
      </div>
    </Router>
    // <div>
    //   <LoginSignUp/>
    // </div>
    
  );
}

export default App;
