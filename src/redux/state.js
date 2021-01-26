import profileReducer from './profile-reducer'
import dialogReducer from  './dialog-reducer'


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
    this._state.profilePage = profileReducer(this._state.profilePage, action) 

    this._state.dialogPage = dialogReducer(this._state.dialogPage, action) 

    this._callSubscriber(this._state)

  }

}



window.store = store
export default store