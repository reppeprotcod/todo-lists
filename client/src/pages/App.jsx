import 'materialize-css';
import M from 'materialize-css/dist/js/materialize.js';
import Navbar from "../components/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Registration from '../components/Registration';
import Login from '../components/Login';
import useAuth from '../hooks/auth.hook';
import NewNavbar from '../components/NewNavbar';
import AuthContext from '../contexts/AuthContext';
import { useContext, useEffect } from 'react';
import Lists from './Lists';
import List from './List';

const Nav = () => {
  const auth = useContext(AuthContext);
  if(auth.token == null) return <Navbar />;
  return <NewNavbar />;
}

function App() {
  useEffect(() => {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});
  })

  const auth = useAuth();

  return (
    <AuthContext.Provider value={{
      login: auth.login,
      logout: auth.logout,
      token: auth.token
    }}>
      <BrowserRouter>
        <div>
          <Nav />
          <Routes>
            <Route path='/registration' element={<Registration />} />
            <Route path='/login' element={<Login />} />
            <Route path='/lists' element={<Lists />} />
            <Route path='/lists/:id' element={<List />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
