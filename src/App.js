import './App.css';
import { Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPages';
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';
import axios from 'axios';
import { useEffect } from 'react';



function App() {

  const keepLogin = () => {
    let token = localStorage.getItem('terralogiqLog');

    if (token) {
      axios.get('http://localhost:8000/auth/keep_login', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then((res) => {
          if (res.data.idusers) {
            localStorage.setItem('terralogiqLog', res.data.token);
          }

        }).catch((err) => {
          console.log(err);
        })
    }
  };

  useEffect(() => {
    keepLogin()
  }, [])


  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
