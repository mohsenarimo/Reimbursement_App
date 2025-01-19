import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import LoginPage from './components/LoginPage.jsx';
//
function App() {
  return (
    <Router>
       <Routes> 
        <Route path="/" element={<LoginPage />} /> 
        
        </Routes> 
      </Router> );
}

export default App;
