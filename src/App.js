
import './App.css';
import  NavbarLand from './components/NavbarLand/NavbarLand';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import Home from './pages/Landing/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  
          path="/"
          element={
            < Home />
          }
        />  

      </Routes>
    </BrowserRouter>
  ) 
}

export default App;
