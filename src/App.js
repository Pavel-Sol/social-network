import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom'

import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import ProfileContainer from './components/Profile/ProfileContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import News from './components/News/News'
import Musik from './components/Musik/Musik'
import Settings from './components/Settings/Settings'
import UsersContainer from './components/Users/UsersContainer'

function App(props) {
  return ( 
    <div className= 'app-wrapper' >
      <Header />
      <Navbar />
      <div className= 'app-wrapper-content'>
        <Route path='/dialogs' render={() => <DialogsContainer />}></Route>
        <Route path='/users' render={() => <UsersContainer />}></Route>
        <Route path='/profile' render={() => <ProfileContainer />}></Route>
        <Route path='/news' component={News}></Route>
        <Route path='/musik' component={Musik}></Route>
        <Route path='/settings' component={Settings}></Route>
      </div>
    </div>
  );
}





export default App;
