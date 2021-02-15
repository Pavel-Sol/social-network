import s from './Header.module.css'
import { NavLink } from 'react-router-dom'

function Header(props) {
    return (
        <header className={s.header}>
            <img src='https://kbmis.com/wp-content/uploads/2018/10/autodesk-logo-png-autodesk-unveils-complete-manufacturing-software-portfolio-tct-magazine-2272-1024x768.png' />

            <div className={s.login}>
                {props.isAuth ? props.login : <NavLink to='/login'>
                    login
                </NavLink>}


            </div>
        </header>
    )
}

export default Header