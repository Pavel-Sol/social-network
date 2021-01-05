import s from './Profile.module.css'

function Profile() {
    return (
        <div className={s.content}>
            <div className={s.head_img}>
                <img src='https://ackor.ru/upload/medialibrary/39b/39b572253891761721718b5bbd0efe52.PNG' />
            </div>
            <div> ava + desc</div>
            <div> My posts
           <div>
                    New post
           </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post № 1
                    </div>
                    <div className={s.item}>
                        post № 2
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile