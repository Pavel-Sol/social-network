const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'


let initalState = {
   dataPost : [
       { id: 1, message: 'hi, how are you', likesCount: 7 },
       { id: 2, message: 'hi, check my new photo', likesCount: 1 },
     ],
     newPostText : 'some text',
     profile: null
}

const profileReducer = (state = initalState, action) => {

   switch (action.type) {
      case ADD_POST: 
         let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
          }
      
         return {
            ...state,
            dataPost: [...state.dataPost, newPost],
            newPostText : ''
         }


      case UPDATE_NEW_POST_TEXT: 
         return {
            ...state,
            newPostText : action.newText
         }

         case SET_USER_PROFILE: 
         return {
            ...state,
            profile : action.profile
         }

   
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

 export let setUserProfile = (profile) => {
   return {
       type: SET_USER_PROFILE,
       profile
   }
 }

export default profileReducer