import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./Profileinfo/ProfileInfo";
import {ActionsType, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    dispatch: (action: ActionsType) => void
    profilePage: ProfilePageType
    //addPost: (postMessage: string) => void
    //updateNewPostText: (postMessage: string) => void

}

const Profile = (props: ProfilePropsType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}
                     />

            Main content
        </div>
    );
}

export default Profile;