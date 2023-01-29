import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import DeveloperList from './components/DeveloperList'
import Summary from './components/Summary';
import CreateProfile from './components/CreateProfile';
import ContactInfo from './components/ContactInfo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ContactInfo />
        <Routes>
          {/* <Route path='/' element={<ItemsList />}/> */}
          {/* <Route path='/ItemsList' element={<ItemsList />}/>
            <Route path='/AddItems' element={<AddItems />}/>
            <Route path='/ItemInfo/:id' element={<ItemInfo />}/>
            <Route path='/updateItemByID/:id' element={<UpdateItem />}/>
            <Route path='/getItemByID/:id' element={<ItemInfo />}/> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
