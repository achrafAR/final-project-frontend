import React from 'react'
import HomeUi from "../components/homePage/HomeUi/homeUi.jsx";
import Popular from "../components/homePage/Popular/Popular.jsx";
// import ActivityDescription from "../components/homePage/ActivityDescription/activityDescription";
import AssiRiver from '../components/homePage/AsiRiver/asiRiver.jsx'
import Welcome from '../components/homePage/Welcome/Welcome.jsx'
import RaftingFounder from "../components/homePage/RaftingFounder/raftingFounder.jsx";
import VideoDescription from "../components/homePage/VideoDescription/videoDescription.jsx";
import OpeningDate from "../components/homePage/Opening/opening.jsx";
import Gallery from '../components/homePage/GalleryHomePage/GalleryHomePage.jsx'
import Footer from '../components/Footer/Footer.jsx'

function HomePage() {
    return (
        <div className='HomePage_Page'
        style={{
            width:'100%',
            display:'flex',
            flexDirection: 'column',
            gap:'10dvh',
}}
        
        
        
        >
            <HomeUi />
            <Popular />
            {/* <ActivityDescription /> */}
            <Welcome />
            <AssiRiver />
            <RaftingFounder />
            {/*<VideoDescription />
            <Welcome />
            <OpeningDate />
            <Gallery />
            <Footer /> */}
        </div>
    )
}

export default HomePage
