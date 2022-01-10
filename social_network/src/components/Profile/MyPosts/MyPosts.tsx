import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
    addPostAC,
    updateNewPostAC
} from "../../../redux/profile-reducer";
import {ActionsType, PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (postMessage: string) => void
    dispatch: (action: ActionsType) => void
}


const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post id={p.id} post={p.post} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea ///ref={newPostElement}
                    value={props.newPostText}
                    onChange={onPostChange}/>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
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