import Users from './Users'
import { followAC, unFollowAC, setUsersAC, setCurentPageAC, setTotalUserCountAC } from './../../redux/users-reducer'
import { connect } from 'react-redux'



let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUserCount: state.usersPage.totalUserCount,
      curentPage: state.usersPage.curentPage
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(followAC(userId))
      },

      unFollow: (userId) => {
         dispatch(unFollowAC(userId))
      },

      setUsers: (users) => {
         dispatch(setUsersAC(users))
      },

      setTotalUserCount: (totalUserCount) => {
         dispatch(setTotalUserCountAC(totalUserCount))
      },

      setCurentPage: (curentPage) => {
         dispatch(setCurentPageAC(curentPage))
      }

   }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer