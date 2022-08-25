import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
// import Page404 from './components/Page404';
import User from './components/User';
import User2 from './components/User2';
import SearchPrm from './components/SearchPrm';

function App() {
  return ( 
    <div className="App">
    <BrowserRouter>
      <Navbar />
      {/* <Link to="/about">About</Link>
      <br></br>
      <Link to="/">Home</Link> */}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/user/' element={<User />}>
          <Route path='user2/:name' element={<User2 /> } />
        </Route>

  
        {/* <Route path='/*' element={<Page404 />}/> */}
        {/* you can do this as well */}
        <Route path='/*' element={<Navigate to="/"/>}/>
        <Route path='/search' element={<SearchPrm />}/>
      </Routes>
        
    </BrowserRouter>
    </div>
  );
}

export default App;
