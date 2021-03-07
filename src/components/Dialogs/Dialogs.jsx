import s from './Dialogs.module.css'
import DialogName from './DialogName/DialogName'
import Message from './Message/Message'
import { Redirect } from 'react-router-dom'


function Dialogs(props) {
    let state = props.dialogPage



    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    if (!props.isAuth) return <Redirect to={'/login'} />

    return (
        <div>
            <div className={s.dialogsWrap}>
                <div className={s.dialogsNames}>
                    {state.dataName.map(item => {
                        return <DialogName name={item.name} id={item.id} />
                    })}
                </div>
                <div className={s.messages}>
                    {state.dataMessage.map(item => {
                        return <Message text={item.text} />
                    })}
                </div>
            </div>
            <div>
                <div>
                    <textarea value={state.newMessageBody} onChange={onNewMessageChange}></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>SEND</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs