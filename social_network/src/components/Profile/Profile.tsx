import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./Profileinfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    addPost: (postMessage: string) => void
    profilePage: ProfilePageType
    updateNewPostText: (postMessage: string) => void
}

const Profile = (props: ProfilePropsType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}/>

            Main content
        </div>
    );
}

export default Profile;