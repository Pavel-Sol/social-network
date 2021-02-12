import React from 'react'
import s from './Users.module.css'
import userPhoto from './../../assets/images/photo.png'


function Users(props) {

   let pageCount = Math.ceil(props.totalUserCount / props.pageSize)
   let pages = []
   for (let i = 1; i <= pageCount; i++) {
      pages.push(i)
   }

   return (
      <div>
         <h3>USERS</h3>

         <div className={s.control}>
            {pages.map(p => {
               return <span onClick={() => { props.onPageChange(p) }} className={props.curentPage == p && s.selected}>{p}</span>
            })}

         </div>
         <ul>
            {props.users.map(user => {
               return <li>
                  <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="photo" />
                  <div>
                     {user.followed ? <button onClick={() => { props.unFollow(user.id) }}>UNFOLLOW</button> : <button onClick={() => { props.follow(user.id) }}>FOLLOW</button>}
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




export default Users