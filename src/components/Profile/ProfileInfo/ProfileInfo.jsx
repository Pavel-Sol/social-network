import s from './ProfileInfo.module.css'
function ProfileInfo() {
    return (
        <div>
            <div className={s.head_img}>
                <img src='https://ackor.ru/upload/medialibrary/39b/39b572253891761721718b5bbd0efe52.PNG' />
            </div>
            <div> avatar + desc</div>
        </div>
    )
}

export default ProfileInfo