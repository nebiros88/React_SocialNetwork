import React from 'react';
import style from './Users.module.css';


const Users = (props) => {
  return (
    <div>
      {props.users.map(user =>
        <div key={user.id} className={style.userInfo_wrapper}>
          <div className={style.userInfo_wrapper__1col}>
            <img className={style.userAvatar} src={user.photoUrl} />
            {user.followed
              ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
              : <button onClick={() => { props.follow(user.id) }}>Follow</button>}
          </div>
          <div className={style.userInfo_wrapper__2col}>
            <div className={style.userName}>{user.name} {user.surName}</div>
            <div className={style.userLocation}>Country:{user.location.country} <br />City:{user.location.city}</div>
          </div>
        </div>
      )
      }
    </div>
  )
}

export default Users;