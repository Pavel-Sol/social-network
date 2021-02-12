import Users from './Users'
import { followAC, unFollowAC, setUsersAC, setCurentPageAC, setTotalUserCountAC } from './../../redux/users-reducer'
import { connect } from 'react-redux'
import * as axios from 'axios'
import React from 'react'



class UsersContainer extends React.Component {
   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.curentPage}`)
         .then((response) => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)
         })

   }

   onPageChange = (pageNumber) => {
      this.props.setCurentPage(pageNumber)

      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
         .then((response) => { this.props.setUsers(response.data.items) })
   }


   render() {
      return (
         <Users totalUserCount={this.props.totalUserCount}
            pageSize={this.props.pageSize}
            onPageChange={this.onPageChange}
            curentPage={this.props.curentPage}
            users={this.props.users}
            unFollow={this.props.unFollow}
            follow={this.props.follow} />
      )
   }
}







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


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
