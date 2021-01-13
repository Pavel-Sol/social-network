import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'




function DialogName(props) {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialogName}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

function Message(props) {
    return (
        <div className={s.message}>
            {props.text}
        </div>
    )
}

function Dialogs() {

    let dataName = [
        { id: 1, name: 'Victor' },
        { id: 2, name: 'Sergeyr' },
        { id: 3, name: 'Marina' }
    ]

    let dataMessage = [
        { id: 1, text: 'hello' },
        { id: 2, text: 'How are you' },
        { id: 3, text: 'yo' }
    ]
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