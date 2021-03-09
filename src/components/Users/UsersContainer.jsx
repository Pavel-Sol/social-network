import Users from './Users'
import { follow, unFollow, getUsers } from './../../redux/users-reducer'
import { connect } from 'react-redux'
import React from 'react'
import Preloader from './../common/Preloader/Preloader'
import withAuthRedirect from './../../hoc/AuthRedirect'


class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.getUsers(this.props.pageSize, this.props.curentPage)
   }

   onPageChange = (pageNumber) => {
      this.props.getUsers(this.props.pageSize, pageNumber)
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
               followingInProgress={this.props.followingInProgress} />
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

let AuthRedirect = withAuthRedirect(UsersContainer)

export default connect(mapStateToProps, {
   follow,
   unFollow,
   getUsers
})(AuthRedirect)
