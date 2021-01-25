const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

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
          ],
          newMessageBody: 'some message'
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


  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      }
      this._state.profilePage.dataPost.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)

    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogPage.newMessageBody = action.body
      this._callSubscriber(this._state)

    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogPage.newMessageBody
      this._state.dialogPage.dataMessage.push({ id: 4, text: body})
      this._state.dialogPage.newMessageBody = ''
      this._callSubscriber(this._state)
    }

  }

}


export let addPostActionCreator = () => {
  return { type: ADD_POST }
}

export let updateNewPostText = (text) => {
  return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text
  }
}

export let sendMessageCreator = () => {
  return { type: SEND_MESSAGE }
}

export let updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
  }
}


window.store = store
export default store