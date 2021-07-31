import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return <div className={s.content}>
    <div>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGh5nnU_7Ug4dKSN3ufS3W66ZaOMsl6mk0rg&usqp=CAU' alt='profilePicture'></img>
    </div>
    <div>
      ava + description
    </div>
    <MyPosts></MyPosts>
  </div>
}

export default Profile;