import s from './Post.module.css'

function Post(props) {
    return (
        <div className={s.item}>
            <img src="https://www.deafkontakt.ru/photos/1466269mm.jpg" alt="" />
            {props.message}
            <span> Like {props.likeCount}</span>
        </div>
    )
}

export default Post