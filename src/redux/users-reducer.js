const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_TOTAL_USER_COUNT = 'SET-TOTAL-USER-COUNT'
const SET_CURENT_PAGE = 'SET-CURENT-PAGE'

let initalState = {
   users: [],
   pageSize: 5,
   totalUserCount: 0,
   curentPage: 3
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
            users: [...action.users]
         }

         case SET_CURENT_PAGE: 
         return{
            ...state,
            curentPage: action.curentPage
         }

         case SET_TOTAL_USER_COUNT: 
         return{
            ...state,
            totalUserCount: action.totalUserCount
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

export let setTotalUserCountAC = (totalUserCount) => {
   return {
      type: SET_TOTAL_USER_COUNT,
      totalUserCount
   }
}

export let setCurentPageAC = (curentPage) => {
   return {
      type: SET_CURENT_PAGE,
      curentPage
   }
}


export default usersReduser