import './App.css';
import { useState } from 'react';
import { data } from './data';

function App() {
  const [place, setPlace] = useState(0);
  const {id, placeName, description, image} = data[place];
  console.log(data[place])

  const nextPlace = () => {
    setPlace ((place => {
      place++;
      if (place > data.length -1) {
        place=0;
      }
      return place;
    }))
  }

  const prevPlace = () => {
    setPlace ((place => {
      place --;
      if (place < 0) {
        return data.length -1;
      }
      return place;
    }))
  }

  return (
    <div>
      <div className="App">
        <h1>ГДЕ ПОГУЛЯТЬ</h1>
      </div>
      <div className="App">
        <h2>{id}-{placeName}</h2>
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

export default App;