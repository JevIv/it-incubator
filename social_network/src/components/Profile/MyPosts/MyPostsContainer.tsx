import React from "react";
import {
    addPostAC,
    updateNewPostAC
} from "../../../redux/profile-reducer";
import {ActionsType, PostType} from "../../../redux/state";
import MyPosts from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

type MyPostsPropsType = {
    store: any
    //addPost: (postMessage: string) => void
    newPostText: string
    //updateNewPostText: (postMessage: string) => void
    dispatch: (action: ActionsType) => void
}


const MyPostsContainer = (props: MyPostsPropsType) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostAC(props.newPostText));
                }

                let onPostChange = (text) => {
                    const action = updateNewPostAC(text)
                    store.dispatch(action);
                }
                return (
                    <MyPosts updateNewPostText={onPostChange}
                             addPost={addPost}
                             posts={state.profilePage.posts}
                             newPostText={state.profilePage.newPostText}/>)
            }
            }
        </StoreContext.Consumer>)

}

export default MyPostsContainer;