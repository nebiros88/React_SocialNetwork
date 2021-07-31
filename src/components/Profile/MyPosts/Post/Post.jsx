import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return <div className={s.item}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa8WJ2J0pFCzprc-akfjWao4hOBmsdX3ujUQ&usqp=CAU' alt='postmakerLogo'></img>
    {props.message}
    <div></div>
    Likes = {props.likeCouner}
    <div></div>
    <span>Like</span>
  </div>

}

export default Post;