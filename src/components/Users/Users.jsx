import React from 'react'
import s from './Users.module.css'
import * as axios from 'axios'
import userPhoto from './../../assets/images/photo.png'


class Users extends React.Component {

   componentDidMount() {
      axios.get('https://social-network.samuraijs.com/api/1.0/users?count=10&page=188')
         // .then((response) => { console.log(response.data.items) })
         .then((response) => { this.props.setUsers(response.data.items) })

   }


   render() {
      return (
         <div>
            <h3>USERS</h3>

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