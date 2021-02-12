const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_TOTAL_USER_COUNT = 'SET-TOTAL-USER-COUNT'
const SET_CURENT_PAGE = 'SET-CURENT-PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

let initalState = {
   users: [],
   pageSize: 5,
   totalUserCount: 0,
   curentPage: 3,
   isFetching: false
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
            users: action.users
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

         case TOGGLE_IS_FETCHING: 
         return{
            ...state,
            isFetching: action.isFetching
         }
   
   
      default:
         return state
   }
}

export let follow = (userId) => {
   return {
      type: FOLLOW,
      userId
   }
}

export let unFollow = (userId) => {
   return {
      type: UNFOLLOW,
      userId
   }
}

export let setUsers = (users) => {
   return {
      type: SET_USERS,
      users
   }
}

export let setTotalUserCount = (totalUserCount) => {
   return {
      type: SET_TOTAL_USER_COUNT,
      totalUserCount
   }
}

export let setCurentPage = (curentPage) => {
   return {
      type: SET_CURENT_PAGE,
      curentPage
   }
}

export let toggleIsFetching = (isFetching) => {
   return {
      type: TOGGLE_IS_FETCHING,
      isFetching
   }
}


export default usersReduser