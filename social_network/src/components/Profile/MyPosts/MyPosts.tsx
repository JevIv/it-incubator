import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";

/*type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (postMessage: string) => void
    dispatch: (action: ActionsType) => void
}*/


const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.profilePage.posts.map(p => <Post id={p.id} post={p.post} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        let postText = newPostElement.current?.value;
        if (postText){
            props.addPost(postText);
        }
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
                    value={props.profilePage.newPostText}
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