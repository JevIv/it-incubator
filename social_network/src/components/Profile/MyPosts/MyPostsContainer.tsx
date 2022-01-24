import React from "react";
import {
    addPostAC,
    updateNewPostAC
} from "../../../redux/profile-reducer";
import {ActionsType, PostType} from "../../../redux/state";
import MyPosts from "./MyPosts";

type MyPostsPropsType = {
    store: any
    //addPost: (postMessage: string) => void
    newPostText: string
    //updateNewPostText: (postMessage: string) => void
    dispatch: (action: ActionsType) => void
}


const MyPostsContainer = (props: MyPostsPropsType) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostAC(props.newPostText));
    }

    let onPostChange = (text) => {
        const action = updateNewPostAC(text)
        props.store.dispatch(action);
    }

    return (<MyPosts updateNewPostText={onPostChange}
                     addPost={addPost}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}/>)

}

export default MyPostsContainer;