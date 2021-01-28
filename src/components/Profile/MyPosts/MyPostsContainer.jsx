import React from 'react'
import { addPostActionCreator, updateNewPostTextCreator } from './../../../redux/profile-reducer'
import MyPosts from './MyPosts'



const MyPostsContainer = (props) => {
    let state = props.store.getState()


    function addPost() {
        props.store.dispatch(addPostActionCreator())
    }

    function onPostChange(text) {
        let action = updateNewPostTextCreator(text)
        props.store.dispatch(action)
    }
    return (
        <MyPosts dataPost={state.profilePage.dataPost} addPost={addPost} updateNewPostText={onPostChange} newPostText={state.profilePage.newPostText} />
    )
}


export default MyPostsContainer