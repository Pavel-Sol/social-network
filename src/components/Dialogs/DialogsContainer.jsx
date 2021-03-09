import Dialogs from './Dialogs'
import { sendMessageCreator, updateNewMessageBodyCreator } from './../../redux/dialog-reducer'
import { connect } from 'react-redux'
import withAuthRedirect from './../../hoc/AuthRedirect'
import { compose } from 'redux'


let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }

    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
