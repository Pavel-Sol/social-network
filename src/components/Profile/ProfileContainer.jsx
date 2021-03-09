import { connect } from 'react-redux'
import React from 'react'
import Profile from './Profile'
import { getUserProfile } from './../../redux/profile-reducer'
import { withRouter } from 'react-router-dom'
import withAuthRedirect from './../../hoc/AuthRedirect'

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = 2
        }

        this.props.getUserProfile(userId)
    }



    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let AuthRedirect = withAuthRedirect(ProfileContainer)

let withUrlDataContainerComponent = withRouter(AuthRedirect)

export default connect(mapStateToProps, { getUserProfile })(withUrlDataContainerComponent)

