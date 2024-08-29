import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Update from './Update';
import Read from './Read';
import { Delete } from 'react-axios';
import Create from './Create';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/update/:id' element={<Update />}></Route>
        <Route path='/read/:id' element={<Read />}></Route>
        {/* <Route path='/delete/:id' element={<Delete />}></Route> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
