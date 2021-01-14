import s from './Dialogs.module.css'
import DialogName from './DialogName/DialogName'
import Message from './Message/Message'


function Dialogs(props) {
    let dataName = props.dataName
    let dataMessage = props.dataMessage

    return (
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
    )
}

export default Dialogs