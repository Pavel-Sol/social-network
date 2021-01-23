let store = {
  _state : {
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
  },

  _callSubscriber () {
    console.log('state changed')
  },

  getState () {
    return this._state
  },

  subscribe (observer) {
    this._callSubscriber = observer
  },




//   addPost () {
//     let newPost = {
//       id: 5,
//       message: this._state.profilePage.newPostText,
//       likesCount: 0
//     }
   
//     this._state.profilePage.dataPost.push(newPost)
//     this._state.profilePage.newPostText = ''
//     this._callSubscriber(this._state)
//   },

//   updateNewPostText (newText) {
//     this._state.profilePage.newPostText = newText
//     this._callSubscriber(this._state)
//   },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      }
      this._state.profilePage.dataPost.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)

    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)
    }

  }

}


window.store = store
export default store