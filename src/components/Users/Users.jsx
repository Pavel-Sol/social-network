import s from './Users.module.css'




const Users = (props) => {

   let users = props.users


   if (users.length === 0) {
      props.setUsers(
         [
            { id: 1, imgAdress: 'https://yt3.ggpht.com/a/AATXAJyJD9aYV3Evw3IMCaavJESDWSCSW9JpcoL9OgfH=s900-c-k-c0xffffffff-no-rj-mo', followed: true, fullName: 'Pavel', status: 'На связи', location: { country: 'Россия', city: 'Красноярск' } },
            { id: 2, imgAdress: 'https://yt3.ggpht.com/a/AATXAJyJD9aYV3Evw3IMCaavJESDWSCSW9JpcoL9OgfH=s900-c-k-c0xffffffff-no-rj-mo', followed: false, fullName: 'Semeon', status: 'Занят на работе', location: { country: 'Беларусь', city: 'Минск' } },
            { id: 3, imgAdress: 'https://yt3.ggpht.com/a/AATXAJyJD9aYV3Evw3IMCaavJESDWSCSW9JpcoL9OgfH=s900-c-k-c0xffffffff-no-rj-mo', followed: true, fullName: 'Aliya', status: 'В поездке', location: { country: 'Казахстан', city: 'Алматы' } }
         ]
      )
   }



   return (
      <div>
         <h3>USERS</h3>

         <ul>
            {users.map(user => {
               return <li>
                  <img src={user.imgAdress} alt="" />
                  <div>
                     {user.followed ? <button onClick={() => { props.unFollow(user.id) }}>FOLLOW</button> : <button onClick={() => { props.follow(user.id) }}>UNFOLLOW</button>}
                  </div>
                  <div>{user.fullName}</div>
                  <div>{user.status}</div>
                  <div>
                     <span>{user.location.country}</span>
                     <span>{user.location.city}</span>
                  </div>
                  <hr />
               </li>
            })}
         </ul>
      </div>
   )
}

export default Users