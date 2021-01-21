import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts(props) {
    let dataPost = props.dataPost

    let newPostElement = React.createRef()

    function addPost() {
        props.addPost()
    }

    function onPostChange() {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My post</h3>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}> Add post</button>
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