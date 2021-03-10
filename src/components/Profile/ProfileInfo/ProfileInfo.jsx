import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'

function ProfileInfo(props) {
    console.log(props)
    if (!props.profile) {
        return (
            <Preloader />
        )
    }

    return (
        <div>
            <div>
                <img src={props.profile.photos.large} alt="" />
            </div>
            <h4>{props.profile.fullName}</h4>
            <ProfileStatus status={'heeeeelooooo!!!!'} />
            <h4>{`Обо мне: ${props.profile.aboutMe}`}</h4>
            <hr />
        </div>
    )
}

export default ProfileInfo