import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {
  let postsData = [
    {id: 1, message: 'Hi', likeCounter: 15},
    {id: 2, message: 'It is is my first post', likeCounter: 10},
  ];
  
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
        <Post message={postsData[0].message} likeCounter={postsData[0].likeCounter} />
        <Post message={postsData[1].message} likeCounter={postsData[1].likeCounter} />
      </div>
    </div>
  )
}

export default MyPosts;