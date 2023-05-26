import React, {useState, useEffect} from 'react'
import './raftingFounder.css'
import axios from 'axios'
// import welcomeIcons from '../../../icons/location.png'
function RaftingFounder() {

    const [raftingFounder, setRaftingFounder] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/raftingFounder");
                setRaftingFounder(response.data.data);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='rafting_founder_container'>
            {raftingFounder.map((raftingFounder, index) => {
                return (
                    <div className='rafting_founder'>
                        <div className='rafting_founder_image'>
                            <img src={raftingFounder.image} alt=" rafting_founder" />
                        </div>
                        <div className='rafting_founder_title_description'>
                            <h5>{raftingFounder.title}</h5>
                            <p>{raftingFounder.description}</p>
                        </div>
                    </div>
                )
            })}


        </div>
    )
}

export default RaftingFounder