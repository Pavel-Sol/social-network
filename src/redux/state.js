import {rerenderEntireTree} from './../render'

let state = {
    profilePage: {
        dataPost : [
            { id: 1, message: 'hi, how are you', likesCount: 7 },
            { id: 2, message: 'hi, check my new photo', likesCount: 1 },
          ],
          newPostText : 'some text'
    },
    dialogPage: {
        dataName : [
            { id: 1, name: 'Victor' },
            { id: 2, name: 'Sergeyr' },
            { id: 3, name: 'Marina' }
          ],
          dataMessage : [
            { id: 1, text: 'hello' },
            { id: 2, text: 'How are you' },
            { id: 3, text: 'yo' }
          ]  
          
    }
}

window.state = state

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  }
 
  state.profilePage.dataPost.push(newPost)
  state.profilePage.newPostText = ''
  rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText
  rerenderEntireTree(state)
}  

export default state