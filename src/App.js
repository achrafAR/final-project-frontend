import "./App.css";
import HomeUi from "./components/homePage/HomeUi/homeUi.jsx";
import Features from "./components/homePage/Features/Features.jsx";
import Popular from "./components/homePage/Popular/Popular.jsx";
import ActivityDescription from "./components/homePage/ActivityDescription/activityDescription";
import AssiRiver from './components/homePage/AsiRiver/asiRiver.jsx'
import Welcome from './components/homePage/Welcome/welcome.jsx'
import RaftingFounder from "./components/homePage/RaftingFounder/raftingFounder.jsx";
import VideoDescription from "./components/homePage/VideoDescription/videoDescription.jsx";
import OpeningDate from "./components/homePage/Opening/opening.jsx";
import Gallery from './components/homePage/GalleryHomePage/galleryHomePage.jsx'
import Footer from './components/Footer/Footer.jsx'
function App() {
  return (
    <div className="App">
      <HomeUi />
      <Popular />
      <ActivityDescription />
      <Welcome/>
      <AssiRiver/>
      <RaftingFounder/>
      <VideoDescription/>
      <Welcome/>
      <OpeningDate/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
