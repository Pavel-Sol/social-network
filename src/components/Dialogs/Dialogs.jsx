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

                <DialogName name={dataName[0].name} id={dataName[0].id} />
                <DialogName name={dataName[1].name} id={dataName[1].id} />
                <DialogName name={dataName[2].name} id={dataName[2].id} />

            </div>
            <div className={s.messages}>

                <Message text={dataMessage[0].text} />
                <Message text={dataMessage[1].text} />
                <Message text={dataMessage[2].text} />

            </div>
        </div>
    )
}

export default Dialogs