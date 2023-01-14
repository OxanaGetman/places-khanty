import './App.css';
import Main from './Main';
import { data } from './data';
import { dataCafe } from './dataCafe';
import { dataHotel } from './dataHotel';

function App() {
  return (
    <div>
    < Main 
    title = {'ГДЕ ПОГУЛЯТЬ'}
    info = {data}
    />
    < Main 
    title = {'ГДЕ ПОЕСТЬ'}
    info = {dataCafe}
    />
    < Main 
    title = {'ГДЕ ПОЖИТЬ'}
    info = {dataHotel}
    />
    </div>
  )
}

export default App;