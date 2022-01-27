import React from "react";
import ProfileInfo from "./Profileinfo/ProfileInfo";
import {ActionsType, ProfilePageType} from "../../redux/state";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    store: any
    dispatch: (action: ActionsType) => void
    profilePage: ProfilePageType
    //addPost: (postMessage: string) => void
    //updateNewPostText: (postMessage: string) => void

}

const Profile = (props: ProfilePropsType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>

            Main content
        </div>
    );
}

export default Profile;