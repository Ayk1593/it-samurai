import React, {Component} from 'react';
import s from './Post.module.css';
import profileImg from '../../../../assets/images/profile.png'

const Post = (props) => {
    return (

        <div className={s.item}>
            <img src={profileImg}/>

            {props.message}
            <div>
                <span>  like </span> {props.likesCount}
            </div>

        </div>

    )
}

export default Post;