import axios from 'axios';
import React from 'react';
import style from './Users.module.css';
import userDefaultAvatar from './../../assets/img/user_avatar_default.png';

class Users extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users? page=${this.props.selectedPage}&count=${this.props.usersPerPage}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (page) => {
    this.props.changeSelectedPage(page);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users? page=${page}&count=${this.props.usersPerPage}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.usersPerPage);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div className={style.pagesListWrapper}>
          {pages.map(p => {
            return <span key={p.id} className={this.props.selectedPage === p ? style.selectedPage : undefined}
              onClick={() => { this.onPageChanged(p) }}>
              {p}
            </span>
          })}
        </div>
        {this.props.users.map(user =>
          <div key={user.id} className={style.userInfo_wrapper}>
            <div className={style.userInfo_wrapper__1col}>
              <img className={style.userAvatar} src={user.photos.small != null ? user.photos.small : userDefaultAvatar}
                alt="user-avatar" />
              {user.followed
                ? <button onClick={() => { this.props.unfollow(user.id) }}>Unfollow</button>
                : <button onClick={() => { this.props.follow(user.id) }}>Follow</button>}
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
}

export default Users;