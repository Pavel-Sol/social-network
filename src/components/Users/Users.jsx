import React from 'react'
import s from './Users.module.css'
import * as axios from 'axios'
import userPhoto from './../../assets/images/photo.png'


class Users extends React.Component {

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.curentPage}`)
         .then((response) => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)
         })

   }

   onPageChange = (pageNumber) => {
      this.props.setCurentPage(pageNumber)

      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
         .then((response) => { this.props.setUsers(response.data.items) })
   }


   render() {
      let pageCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)
      let pages = []
      for (let i = 1; i <= pageCount; i++) {
         pages.push(i)
      }

      return (
         <div>
            <h3>USERS</h3>
            <div className={s.control}>

               {pages.map(p => {
                  return <span onClick={() => { this.onPageChange(p) }} className={this.props.curentPage == p && s.selected}>{p}</span>
               })}
            </div>
            <ul>
               {this.props.users.map(user => {
                  return <li>
                     <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="photo" />
                     <div>
                        {user.followed ? <button onClick={() => { this.props.unFollow(user.id) }}>FOLLOW</button> : <button onClick={() => { this.props.follow(user.id) }}>UNFOLLOW</button>}
                     </div>
                     <div>{user.name}</div>
                     <div>{user.status}</div>
                     <hr />
                  </li>
               })}
            </ul>
         </div>
      )
   }
}



export default Users