import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'


function Profile(props) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts dataPost={props.state.dataPost} />
        </div>
    )
}

export default Profile

