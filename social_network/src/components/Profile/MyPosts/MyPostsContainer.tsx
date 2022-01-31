import React from "react";
import {
    addPostAC,
    updateNewPostAC
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MyPostsPropsType = {
    store: any
    newPostText: string
}

type MapDispatchPropsType = {
    addPost: (newPostText: string) => void
    updateNewPostText: (postMessage: string) => void
}

const mapStateToProps = (state: MyPostsPropsType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: (newPostText: string) => {dispatch(addPostAC(newPostText))},
        updateNewPostText: (text: string) => {
            const action = updateNewPostAC(text)
            dispatch(action)}
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;