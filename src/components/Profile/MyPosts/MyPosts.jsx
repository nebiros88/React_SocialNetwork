import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../redux/profile-reducer';


const MyPosts = (props) => {
  let postsElements = props.data.map(p => <Post message={p.message} likeCounter={p.likeCounter} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = (e) => {
    let body = e.target.value;
    props.dispatch(updateNewPostTextActionCreator(body));
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            value={props.newPostText}
            placeholder='Enter your post here' />
        </div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;