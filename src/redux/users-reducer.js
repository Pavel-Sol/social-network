const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initalState = {
   users: []
}
   



const usersReduser = (state = initalState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if(u.id === action.userId) {
                  return {...u, followed : true}
               } else {
                  return u
               }
            })
         }
         
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if(u.id === action.userId) {
                  return {...u, followed : false}
               } else {
                  return u
               }
            })
         }

         case SET_USERS: 
         return{
            ...state,
            users: [...state.users, ...action.users]
         }
   
   
      default:
         return state
   }
}

export let followAC = (userId) => {
   return {
      type: FOLLOW,
      userId
   }
}

export let unFollowAC = (userId) => {
   return {
      type: UNFOLLOW,
      userId
   }
}

export let setUsersAC = (users) => {
   return {
      type: SET_USERS,
      users
   }
}


export default usersReduser