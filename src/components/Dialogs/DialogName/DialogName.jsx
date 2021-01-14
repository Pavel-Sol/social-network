import { NavLink } from 'react-router-dom'
import s from './DialogName.module.css'

function DialogName(props) {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialogName}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogName