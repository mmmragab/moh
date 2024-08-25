import logo from './logo.svg';
import './App.css';
import Comp1 from './Component/Comp1';
import Comp2 from './Component/Comp2';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home'

function App() {
  return (<>
   
   <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comp1" element={<Comp1 />} />
          <Route path="/comp2" element={<Comp2 />} />
        </Routes>
      </BrowserRouter>
  
    </>
  );
}

export default App;
