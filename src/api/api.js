import * as axios from 'axios'


const instance = axios.create({
   withCredentials: true,
   headers: {
      'API-KEY': '45e13b90-222c-444c-879d-6288f50bffe6'
   },
   baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export const usersAPI = {
   getUsers (pageSize = 1, curentPage = 10) {
      return instance.get(`users?count=${pageSize}&page=${curentPage}`)
          .then(response => {return response.data})
    },

    unfollow(userId) {
      return instance.delete(`follow/${userId}`)
      .then(response => {return response.data})
    },

    follow(userId) {
      return instance.post(`follow/${userId}`)
      .then(response => {return response.data})
    }
}