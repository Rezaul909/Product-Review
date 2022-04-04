import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Review from './Components/Review/Review';
import Dashboard from './Components/Dashboard/Dashboard';
import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';


function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch('home.json')
    .then(res => res.json())
    .then(data => setData(data))
  },[])


  return (
    <div className="App">
      <Header></Header>

      <Routes>
          <Route path='/' element={<Home data={data}></Home>}></Route>
          <Route path='/Home' element={<Home data={data}></Home>}></Route>
          <Route path='/Review' element={<Review></Review>}></Route>
          <Route path='/Dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/Blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/About' element={<About></About>}></Route>
          <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
