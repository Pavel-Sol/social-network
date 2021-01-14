import s from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts() {

    let dataPost = [
        { id: 1, message: 'hi, how are you', likesCount: 7 },
        { id: 2, message: 'hi, check my new photo', likesCount: 1 },
    ]
    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My post</h3>
                <div>
                    <textarea name="" id="" cols="50" rows="3"></textarea>
                </div>
                <div>
                    <button> Add post</button>
                </div>
            </div>
            <div className={s.posts}>

                {dataPost.map(item => {
                    return <Post message={item.message} likeCount={item.likesCount} />
                })}
            </div>
        </div>
    )
}

export default MyPosts