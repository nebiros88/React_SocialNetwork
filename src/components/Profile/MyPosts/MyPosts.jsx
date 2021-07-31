import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {
  return <div>
    My posts
    <div>
      <textarea></textarea>
      <button>Add post</button>
    </div>
    <div className={s.posts}>
      <Post message='Hi'likeCouner='15'/>
      <Post message='It is is my first post'likeCouner='10'/>
    </div>
  </div>

}

export default MyPosts;