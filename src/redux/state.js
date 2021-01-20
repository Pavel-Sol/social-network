import {rerenderEntireTree} from './../render'

let state = {
    profilePage: {
        dataPost : [
            { id: 1, message: 'hi, how are you', likesCount: 7 },
            { id: 2, message: 'hi, check my new photo', likesCount: 1 },
          ]
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

export let addPost = (postMessage) => {

  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  }
 
  state.profilePage.dataPost.push(newPost)
  rerenderEntireTree(state)
}


export default state