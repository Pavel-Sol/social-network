import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

function Dialogs() {
    return (
        <div className={s.dialogsWrap}>
            <div className={s.dialogsNames}>
                <div className={s.dialogsName}>
                    <NavLink to='/dialogs/1'>Victor</NavLink>
                </div>
                <div className={s.dialogsName}>
                    <NavLink to='/dialogs/2'>Sergey</NavLink>
                </div>
                <div className={s.dialogsName}>
                    <NavLink to='/dialogs/3'>Marina</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi, how are you
                </div>
                <div className={s.message}>
                    What is your name
                </div>
            </div>
        </div>
    )
}

export default Dialogs