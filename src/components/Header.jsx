import s from './Header.module.css'

function Header() {
    return (
        <header className={s.header}>
            <img src='https://kbmis.com/wp-content/uploads/2018/10/autodesk-logo-png-autodesk-unveils-complete-manufacturing-software-portfolio-tct-magazine-2272-1024x768.png' />
        </header>
    )
}

export default Header