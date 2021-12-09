import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ProfilePageType} from "../../../redux/state";


const MyPosts = (props: ProfilePageType) => {

    let postsElements = props.posts.map(p => <Post id={p.id} post={p.post} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.addPost(text);
        }

    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
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