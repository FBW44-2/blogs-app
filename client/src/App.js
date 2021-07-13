import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import {Switch,Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import SiginIn from './pages/SignIn/SiginIn';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <div >
    <Navbar />
    <Switch>
   <Route exact path='/'>
     <Home/>
    </Route>

    <Route exact path='/about'>
     <About/>
    </Route>

    <Route exact path='/blogs'>
     <Blogs/>
    </Route>

    <Route exact path='/signin'>
     <SiginIn/>
    </Route>

    <Route exact path='/signup'>
     <SignUp/>
    </Route>
    </Switch>

    <Footer/>
    </div>
  );
}

export default App;
