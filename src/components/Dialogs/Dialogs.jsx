import s from './Dialogs.module.css'

function Dialogs() {
    return (
        <div className={s.dialogsWrap}>
            <div className={s.dialogsNames}>
                <div className={s.dialogsName}>
                    Victor
                </div>
                <div className={s.dialogsName}>
                    Sergey
                </div>
                <div className={s.dialogsName}>
                    Marina
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