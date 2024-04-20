
import './App.css';
import About from './components/About';
import Booking from './components/Booking';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

function App() {
  return (
    <>
  <Navbar></Navbar>
  <Profile></Profile>
  <div className='row'>
    <div className='col-6'>
<About></About>
    </div>
    <div className='col-6'>
<Booking></Booking>
    </div>
  </div>
   </>
  );
}

export default App;
