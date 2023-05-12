import './App.css';
import Header from './components/Header/Header.jsx';
import HomeUi from './components/homePage/HomeUi/homeUi.jsx';
import Features from './components/homePage/Features/Features.jsx';
function App() {
  return (
    <div className="App">
      <Header/>
      <HomeUi/>
      <Features/>
      
    </div>
  );
}

export default App;
