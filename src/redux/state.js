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

  getState () {
    return this._state
  },

  addPost () {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    }
   
    this._state.profilePage.dataPost.push(newPost)
    this._state.profilePage.newPostText = ''
    this._callSubscriber(this._state)
  },

  updateNewPostText (newText) {
    this._state.profilePage.newPostText = newText
    this._callSubscriber(this._state)
  },

  subscribe (observer) {
    this._callSubscriber = observer
  },

  _callSubscriber () {
    console.log('state changed')
  }


}


window.store = store
export default store