import Dialogs from './Dialogs'
import { sendMessageCreator, updateNewMessageBodyCreator } from './../../redux/dialog-reducer'
import { connect } from 'react-redux'
import withAuthRedirect from './../../hoc/AuthRedirect'


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

let AuthRedirect = withAuthRedirect(Dialogs)
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirect)

export default DialogsContainer