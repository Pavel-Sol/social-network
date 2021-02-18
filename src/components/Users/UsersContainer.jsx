import Users from './Users'
import { follow, unFollow, setUsers, setCurentPage, setTotalUserCount, toggleIsFetching } from './../../redux/users-reducer'
import { connect } from 'react-redux'
import * as axios from 'axios'
import React from 'react'
import Preloader from './../common/Preloader/Preloader'
import { usersAPI } from './../../api/api'


class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.toggleIsFetching(true)

      usersAPI.getUsers(this.props.pageSize, this.props.curentPage)
         .then((data) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUserCount(data.totalCount)
         })

   }

   onPageChange = (pageNumber) => {
      this.props.toggleIsFetching(true)
      this.props.setCurentPage(pageNumber)

      usersAPI.getUsers(this.props.pageSize, pageNumber)
         .then((data) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
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
