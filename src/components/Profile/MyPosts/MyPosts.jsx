import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts(props) {
    let dataPost = props.dataPost

    let newPostElement = React.createRef()

    function addPost() {
        let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = ''
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My post</h3>
                <div>
                    <textarea name="" id="" cols="50" rows="3" ref={newPostElement}></textarea>
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