import "./App.css";
import HomeUi from "./components/homePage/HomeUi/homeUi.jsx";
import Features from "./components/homePage/Features/Features.jsx";
import Popular from "./components/homePage/Popular/Popular.jsx";
import ActivityDescription from "./components/homePage/ActivityDescription/activityDescription";
import AssiRiver from './components/homePage/AsiRiver/asiRiver.jsx'
import Welcome from './components/homePage/Welcome/welcome.jsx'
function App() {
  return (
    <div className="App">
      <HomeUi />
      <Popular />
      <Welcome/>
      <ActivityDescription />
      <AssiRiver/>
    </div>
  );
}

export default App;
