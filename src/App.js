
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { LandingPages } from './Pages/LandingPages/LandingPages';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPages/>}>
          
      </Route>
    </Routes>
  );
}

export default App;
