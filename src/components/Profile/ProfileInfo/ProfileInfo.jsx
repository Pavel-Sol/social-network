import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'

function ProfileInfo(props) {
    console.log(props)
    if (!props.profile) {
        return (
            <Preloader />
        )
    }

    return (
        <div>
            <div className={s.head_img}>
                <img src='https://ackor.ru/upload/medialibrary/39b/39b572253891761721718b5bbd0efe52.PNG' />
            </div>
            <div>
                <img src={props.profile.photos.large} alt="" />
            </div>
            <h4>{props.profile.fullName}</h4>
            <h4>{`Обо мне: ${props.profile.aboutMe}`}</h4>
            <hr />
        </div>
    )
}

export default ProfileInfo