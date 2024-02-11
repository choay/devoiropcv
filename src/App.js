import React, { useEffect, useState, createContext} from 'react';
import Header from './composants/Header';
import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Realisations from './pages/Realisations';
import Services from './pages/Services';
import About from './composants/About';
import {Routes,Route} from 'react-router-dom'
import Footer from './composants/Footer';
import MentionsLegales from './pages/MentionsLegales';




export const UserContext = createContext();

function App() {
  const [user, setUser] = useState([]);

  const getUser = async ()=>{
    const res = await fetch('https://api.github.com/users/github-john-doe');
    const json = await res.json();
    setUser(json);
  }

  useEffect(()=>{getUser();},[])
   
  return (
    <UserContext.Provider value={{user, setUser}}>
      <div className='App'>

        <Header/>
        
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/services' element={<Services/>}></Route>
  <Route path='/realisations' element={<Realisations/>}></Route>
  <Route path='/blog' element={<Blog/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
  <Route path='/Mentionslegales' element={<MentionsLegales/>}></Route>
</Routes>


    <Footer/>
      </div>


    </UserContext.Provider>




  );
}

export default App;
