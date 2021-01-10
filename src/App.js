import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom'

import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Musik from './components/Musik/Musik'
import Settings from './components/Settings/Settings'

function App() {
  return ( 
    <Router>
      <div className= 'app-wrapper' >
        <Header />
        <Navbar />
        <div className= 'app-wrapper-content'>
          <Route path='/dialogs' component={Dialogs}></Route>
          <Route path='/profile' component={Profile}></Route>
          <Route path='/news' component={News}></Route>
          <Route path='/musik' component={Musik}></Route>
          <Route path='/settings' component={Settings}></Route>
        </div>
    </div>
   </Router>
  );
}





export default App;
