import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'


function Profile(props) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts dataPost={props.state.dataPost} addPost={props.addPost} newPostText={props.state.newPostText} updateNewPostText={props.updateNewPostText} />
        </div>
    )
}

export default Profile

