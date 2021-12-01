import React from "react";
import s from "./Post.module.css";
import {PostType} from "../../../../redux/state";

const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img className={s.avatar}
                src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/128564083/original/bd983c2e68a14d16ddc3cf3257e13a57300c881a/draw-your-minimal-avatar.jpg"
                alt=""/>
            { props.post }
            <span>Like</span>
            <span></span>
        </div>);
}

export default Post;