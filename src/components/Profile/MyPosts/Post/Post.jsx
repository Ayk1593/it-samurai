import React, {Component} from 'react';
import s from './Post.module.css';
import profileImg from '../../../../assets/images/profile.png'

const Post = (props) => {
    // const date = new Date().toLocaleDateString()
    // const time = new Date().toLocaleTimeString()
    return (

        <div className={s.item}>
            <img src={profileImg}/>
            {props.message}
            <div className={s.time}>
                {props.date}
            </div>
            <div>
                <span>  like </span> {props.likesCount}
            </div>

        </div>

    )
}

export default Post;