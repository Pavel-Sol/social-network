import s from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts() {
    return (
        <div> My posts
            <div>
                <textarea name="" id="" cols="50" rows="3"></textarea>
                <button> Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='hi, how are you' likeCount='22' />
                <Post message='hi, check my new photo' likeCount='3' />
            </div>
        </div>
    )
}

export default MyPosts