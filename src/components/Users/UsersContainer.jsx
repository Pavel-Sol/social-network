import Users from './Users'
import { followAC, unFollowAC, setUsersAC, setCurentPageAC, setTotalUserCountAC, toggleIsFetchingAC } from './../../redux/users-reducer'
import { connect } from 'react-redux'
import * as axios from 'axios'
import React from 'react'
import Preloader from './../common/Preloader/Preloader'



class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.toggleIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.curentPage}`)
         .then((response) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)
         })

   }

   onPageChange = (pageNumber) => {
      this.props.toggleIsFetching(true)
      this.props.setCurentPage(pageNumber)

      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
         .then((response) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
         })
   }


   render() {
      return (
         <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUserCount={this.props.totalUserCount}
               pageSize={this.props.pageSize}
               onPageChange={this.onPageChange}
               curentPage={this.props.curentPage}
               users={this.props.users}
               unFollow={this.props.unFollow}
               follow={this.props.follow} />
         </>
      )
   }
}







let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUserCount: state.usersPage.totalUserCount,
      curentPage: state.usersPage.curentPage,
      isFetching: state.usersPage.isFetching
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
      },

      toggleIsFetching: (isFetching) => {
         dispatch(toggleIsFetchingAC(isFetching))
      }

   }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
