import React from "react";
import {
    addPostAC,
    updateNewPostAC
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {InitialStateType} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";

type MapStatePropsType = {
    profilePage: InitialStateType
}

type MapDispatchPropsType = {
    addPost: (newPostText: string) => void
    updateNewPostText: (postMessage: string) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage
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