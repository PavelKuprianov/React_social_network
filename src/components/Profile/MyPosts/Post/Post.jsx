import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://pickaface.net/gallery/avatar/jmlatulippe42575035c97eec3.png' alt='' />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
}

export default Post;
