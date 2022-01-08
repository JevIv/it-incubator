import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
    ActionsType,
    addPostAC,
    PostType,
    updateNewPostAC
} from "../../../redux/state";

type MyPostsPropsType = {
    posts:  Array<PostType>
    //addPost: (postMessage: string) => void
    newPostText: string
    //updateNewPostText: (postMessage: string) => void
    dispatch: (action: ActionsType) => void
}




const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post id={p.id} post={p.post} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        props.dispatch(addPostAC(props.newPostText));
        //props.addPost(props.newPostText)
        /*if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.addPost(text);
        }*/
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //let text = newPostElement.current ? newPostElement.current.value : "---";
        let text = e.currentTarget.value;

        const action = updateNewPostAC(text)
        props.dispatch(action);
        //let action = {type: "UPDATE-NEW-POST-TEXT", postMessage: text};
        //props.updateNewPostText(text);
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