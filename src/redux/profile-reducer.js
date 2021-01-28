const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initalState = {
   dataPost : [
       { id: 1, message: 'hi, how are you', likesCount: 7 },
       { id: 2, message: 'hi, check my new photo', likesCount: 1 },
     ],
     newPostText : 'some text'
}

const profileReducer = (state = initalState, action) => {

   switch (action.type) {
      case ADD_POST:
         let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
          }
          state.dataPost.push(newPost)
          state.newPostText = ''
          return state

      case UPDATE_NEW_POST_TEXT:
         state.newPostText = action.newText
         return state
         
   
      default: 
         return state
   }
}


export let addPostActionCreator = () => {
   return { type: ADD_POST }
 }
 
 export let updateNewPostTextCreator = (text) => {
   return {
       type: UPDATE_NEW_POST_TEXT,
       newText: text
   }
 }

export default profileReducer