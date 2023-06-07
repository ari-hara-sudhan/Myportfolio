import './App.css';
import Cursor from './components/Cursor';
import Header from './components/Header';
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import Works from './components/Works';
import Display from './components/Display';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Freelancing from './components/Freelancing';
function App() {
  return (
    <div className='app'>
    <Router>
      <Cursor/>
      <Header/>
      <Routes>
      
      <Route path="/" element={<Display/>}/>
      <Route path="/works" element={<Works/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/freelancing" element={<Freelancing/>}/>

      </Routes>
      <Footer/> 
   
    </Router>

    </div>
   
  );
}

export default App;
