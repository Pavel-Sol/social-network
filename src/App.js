import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom'

import './App.css';
import HeaderContainer from './components/Header/HeaderContainer'
import Navbar from './components/Navbar/Navbar'
import ProfileContainer from './components/Profile/ProfileContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import News from './components/News/News'
import Musik from './components/Musik/Musik'
import Settings from './components/Settings/Settings'
import UsersContainer from './components/Users/UsersContainer'
import Login from './components/Login/Login'

function App(props) {
  return ( 
    <div className= 'app-wrapper' >
      <HeaderContainer />
      <Navbar />
      <div className= 'app-wrapper-content'>
        <Route path='/dialogs' render={() => <DialogsContainer />}></Route>
        <Route path='/users' render={() => <UsersContainer />}></Route>
        <Route path='/profile/:userId?' render={() => <ProfileContainer />}></Route>
        <Route path='/news' component={News}></Route>
        <Route path='/musik' component={Musik}></Route>
        <Route path='/settings' component={Settings}></Route>
        <Route path='/login' component={Login}></Route>
      </div>
    </div>
  );
}





export default App;
