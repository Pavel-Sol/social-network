import React from 'react'
import { addPostActionCreator, updateNewPostTextCreator } from './../../../redux/profile-reducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        dataPost: state.profilePage.dataPost
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },

        updateNewPostText: (text) => {
            let action = updateNewPostTextCreator(text)
            dispatch(action)
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer