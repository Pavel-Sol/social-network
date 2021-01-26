const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action) => {

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
 
 export let updateNewPostText = (text) => {
   return {
       type: UPDATE_NEW_POST_TEXT,
       newText: text
   }
 }

export default profileReducer