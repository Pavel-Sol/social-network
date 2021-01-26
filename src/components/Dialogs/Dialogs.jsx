import s from './Dialogs.module.css'
import DialogName from './DialogName/DialogName'
import Message from './Message/Message'
import { sendMessageCreator, updateNewMessageBodyCreator } from './../../redux/dialog-reducer'


function Dialogs(props) {
    let dataName = props.state.dataName
    let dataMessage = props.state.dataMessage
    let newMessageBody = props.state.newMessageBody



    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div>
            <div className={s.dialogsWrap}>
                <div className={s.dialogsNames}>
                    {dataName.map(item => {
                        return <DialogName name={item.name} id={item.id} />
                    })}
                </div>
                <div className={s.messages}>
                    {dataMessage.map(item => {
                        return <Message text={item.text} />
                    })}
                </div>
            </div>
            <div>
                <div>
                    <textarea value={newMessageBody} onChange={onNewMessageChange}></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>SEND</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs