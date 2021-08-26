import axios from 'axios';
import React from 'react';
import style from './Users.module.css';
import userDefaultAvatar from './../../assets/img/user_avatar_default.png';

const Users = (props) => {
  let getUsers = () => {
    if(props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
          debugger;
          props.setUsers(response.data.items);
        })
    }
  }
  
  return (
    <div>
      <button onClick={getUsers}>Get users</button>
      {props.users.map(user =>
        <div key={user.id} className={style.userInfo_wrapper}>
          <div className={style.userInfo_wrapper__1col}>
            <img className={style.userAvatar} src={user.photos.small != null ? user.photos.small : userDefaultAvatar}
             alt="user-avatar"/>
            {user.followed
              ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
              : <button onClick={() => { props.follow(user.id) }}>Follow</button>}
          </div>
          <div className={style.userInfo_wrapper__2col}>
            <div className={style.userName}>{user.name}</div>
            <div className={style.userLocation}>Country:  <br />City: </div>
          </div>
        </div>
      )
      }
    </div>
  )
}

export default Users;