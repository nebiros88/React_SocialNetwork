import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {
  let posts = [
    { id: 1, message: 'Hi', likeCounter: 15 },
    { id: 2, message: 'It is is my first post', likeCounter: 10 },
  ];

  let postsElements = posts
    .map(p => <Post message={p.message} likeCounter={p.likeCounter} />)

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
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;