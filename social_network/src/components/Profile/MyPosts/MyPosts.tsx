import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ProfilePageType} from "../../../redux/state";


const MyPosts = (props: ProfilePageType) => {

    let postsElements = props.posts.map(p => <Post id={p.id} post={p.post} likesCount={p.likesCount}/>)

    return (
        <div>
            My posts
            <div>
                <button>Add post</button>
                <button>Remove post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
                {/*<Post message={postData[0].post} likesCount={postData[0].likesCount}/>*/}
            </div>
        </div>
)
    ;
}

export default MyPosts;