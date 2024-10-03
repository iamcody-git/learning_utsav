import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login/Login'; 
import Register from './Register/Register'; 

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
      
      <Route index element={< Register />} />
      <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
       
      </Route>
    </Routes>
  </BrowserRouter>
);
