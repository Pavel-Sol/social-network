import Users from './Users'
import { follow, unFollow, setUsers, setCurentPage, setTotalUserCount, toggleIsFetching, toggleFollowingProgress, getUsersThunkCreator } from './../../redux/users-reducer'
import { connect } from 'react-redux'
import React from 'react'
import Preloader from './../common/Preloader/Preloader'


class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.getUsersThunkCreator(this.props.pageSize, this.props.curentPage)
   }

   onPageChange = (pageNumber) => {
      this.props.getUsersThunkCreator(this.props.pageSize, pageNumber)
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
               follow={this.props.follow}
               followingInProgress={this.props.followingInProgress}
               toggleFollowingProgress={this.props.toggleFollowingProgress} />
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
      isFetching: state.usersPage.isFetching,
      followingInProgress: state.usersPage.followingInProgress
   }
}



export default connect(mapStateToProps, {
   follow,
   unFollow,
   setUsers,
   setTotalUserCount,
   setCurentPage,
   toggleIsFetching,
   toggleFollowingProgress,
   getUsersThunkCreator
})(UsersContainer)
