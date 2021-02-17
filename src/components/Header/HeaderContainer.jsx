import React from 'react'
import { setAuthUserData } from './../../redux/auth-reducer'
import Header from './Header'
import { connect } from 'react-redux'
import * as axios from 'axios'



class HeaderContainer extends React.Component {

   componentDidMount() {
      axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
         withCredentials: true
      }).then((respons) => {
         if (respons.data.resultCode === 0) {
            let { id, email, login } = respons.data.data
            this.props.setAuthUserData(id, email, login)
         }
      })
   }

   render() {
      return (
         <Header {...this.props} />
      )
   }
}

let mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth,
      login: state.auth.login
   }
}

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer)