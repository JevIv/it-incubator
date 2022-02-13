import React from "react";
import s from "./Post.module.css";
import {PostType} from "../../../../redux/profile-reducer";

const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img className={s.avatar}
                src="https://toppng.com//public/uploads/preview/avatar-png-11554021661asazhxmdnu.png"
                alt=""/>
            { props.post }
            <span>Like</span>
            <span></span>
        </div>);
}

export default Post;