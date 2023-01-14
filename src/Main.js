import { useState } from "react";

function Main( {title, info} ) {
    const [place, setPlace] = useState(0);
    const {id, placeName, description, image} = info[place];

    const nextPlace = () => {
        setPlace ((place => {
        place++;
        if (place > info.length -1) {
            place=0;
        }
        return place;
    }))
    }

    const prevPlace = () => {
        setPlace ((place => {
        place --;
        if (place < 0) {
            return info.length -1;
        }
        return place;
    }))
    }

    return (
        <div>
        <div className="App">
            <h1>{title}</h1>
        </div>
        <div className="App">
            <h2>{id}. {placeName}</h2>
        </div>
        <div className="App">
            <img src={image} width="600px" alt="ph" />
        </div> 
            <div className="App">
            <p className="text">{description}</p>
            </div>
        <div className="App">
            <button className="btn" onClick={prevPlace}>НАЗАД</button>  
            <button className="btn" onClick={nextPlace}>ВПЕРЁД</button>
        </div>    
        </div>
    );
}

export default Main;