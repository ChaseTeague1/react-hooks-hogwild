import React, {useState} from 'react';

function Tile({hog}){
    const [showDetails, setDetails] = useState("");


    function handleClick(){
        setDetails(showDetails => !showDetails)
    }


    return  (
        <div className='card'>
            <h1>{hog.name}</h1>
            {
                showDetails ? (
                    <ul className="infoList">
                        <li><strong>Weight</strong>: {hog.weight}</li>
                        <li><strong>Specialty</strong>: {hog.specialty}</li>
                        <li><strong>Greased</strong>: {hog.greased ? 'Yes' : 'No'}</li>
                        <li><strong>Highest Medal</strong>: {hog["highest medal achieved"]}</li>
                    </ul>
                ) : (
                    <img src={hog.image}/>
                )
            }
            <button className="pigButton" onClick={handleClick}>Show Details</button>
        </div>
        
    )
}

export default Tile;