import { connect } from 'react-redux'
import React from 'react'
import Profile from './Profile'
import { getUserProfile, getUserStatus, updateUserStatus } from './../../redux/profile-reducer'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = 2
        }

        this.props.getUserStatus(userId)
        this.props.getUserProfile(userId)
    }



    render() {

        return (
            <Profile {...this.props} 
            profile={this.props.profile}
            status={this.props.status}
            updateUserStatus={this.props.updateUserStatus}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
    withRouter
)(ProfileContainer)
