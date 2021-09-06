import React from 'react';
import style from './Users.module.css';
import userDefaultAvatar from './../../assets/img/user_avatar_default.png';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { followAPI } from '../../api/api';

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.usersPerPage);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div className={style.pagesListWrapper}>
        {pages.map(p => {
          return <span key={p.id} className={props.selectedPage === p ? style.selectedPage : undefined}
            onClick={() => { props.onPageChanged(p) }}>
            {p}
          </span>
        })}
      </div>
      {props.users.map(user =>
        <div key={user.id} className={style.userInfo_wrapper}>
          <div className={style.userInfo_wrapper__1col}>
            <NavLink to={'/profile/' + user.id}>
              <img className={style.userAvatar} src={user.photos.small != null ? user.photos.small : userDefaultAvatar}
                alt="user-avatar" />
            </NavLink>
            {user.followed
              ? <button onClick={() => {
                followAPI.deleteFollow(user.id)
                  .then(resultCode => {
                    if (resultCode === 0) {
                      props.unfollow(user.id);
                    }
                  });
              }}>Unfollow</button>
              : <button onClick={() => {
                followAPI.postFollow(user.id)
                  .then(resultCode => {
                    if (resultCode === 0) {
                      props.follow(user.id);
                    }
                  });
              }}>Follow</button>}
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