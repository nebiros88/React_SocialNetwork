import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message='Hi' likeCounter='15' />
        <Post message='It is is my first post' likeCounter='10' />
      </div>
    </div>
  )

}

export default MyPosts;