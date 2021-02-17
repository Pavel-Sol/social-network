import Users from './Users'
import { follow, unFollow, setUsers, setCurentPage, setTotalUserCount, toggleIsFetching } from './../../redux/users-reducer'
import { connect } from 'react-redux'
import * as axios from 'axios'
import React from 'react'
import Preloader from './../common/Preloader/Preloader'



class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.toggleIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.curentPage}`,
         { withCredentials: true }
      )
         .then((response) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)
         })

   }

   onPageChange = (pageNumber) => {
      this.props.toggleIsFetching(true)
      this.props.setCurentPage(pageNumber)

      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`,
         { withCredentials: true }
      )
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



export default connect(mapStateToProps, {
   follow,
   unFollow,
   setUsers,
   setTotalUserCount,
   setCurentPage,
   toggleIsFetching
})(UsersContainer)
