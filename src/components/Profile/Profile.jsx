import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

function Profile() {
    return (
        <div>
            <div className={s.head_img}>
                <img src='https://ackor.ru/upload/medialibrary/39b/39b572253891761721718b5bbd0efe52.PNG' />
            </div>
            <div> ava + desc</div>

            <MyPosts />

        </div>
    )
}

export default Profile