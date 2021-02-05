import s from './Users.module.css'
import * as axios from 'axios'
import userPhoto from './../../assets/images/photo.png'




const Users = (props) => {

   let users = props.users

   const getUsers = () => {
      if (users.length === 0) {
         axios.get('https://social-network.samuraijs.com/api/1.0/users?count=4&page=190')
            // .then((response) => { console.log(response.data.items) })
            .then((response) => { props.setUsers([...response.data.items]) })
      }
   }




   return (
      <div>
         <button onClick={getUsers}>get users</button>

         <h3>USERS</h3>

         <ul>
            {users.map(user => {
               return <li>
                  <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="photo" />
                  <div>
                     {user.followed ? <button onClick={() => { props.unFollow(user.id) }}>FOLLOW</button> : <button onClick={() => { props.follow(user.id) }}>UNFOLLOW</button>}
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