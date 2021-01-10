import s from './Post.module.css'

function Post() {
    return (
        <div className={s.item}>
            <img src="https://www.deafkontakt.ru/photos/1466269mm.jpg" alt="" />
            post № 1
            <span>Lile</span>
        </div>
    )
}

export default Post