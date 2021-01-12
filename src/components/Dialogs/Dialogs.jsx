import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'


// let dataName = [
//     { id: 1, name: 'Victor' },
//     { id: 2, name: 'Sergeyr' },
//     { id: 3, name: 'Marina' }
// ]

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
            {props.textMessage}
        </div>
    )
}

function Dialogs() {
    return (
        <div className={s.dialogsWrap}>
            <div className={s.dialogsNames}>

                <DialogName name='Victor' id='1' />
                <DialogName name='Sergeyr' id='2' />
                <DialogName name='Marina' id='3' />

            </div>
            <div className={s.messages}>

                <Message textMessage='Hi, how are you' />
                <Message textMessage='What is your name' />

            </div>
        </div>
    )
}

export default Dialogs