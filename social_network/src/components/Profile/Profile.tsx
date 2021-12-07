import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./Profileinfo/ProfileInfo";
import {PostType, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    state: ProfilePageType
}

const Profile = (props: ProfilePropsType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}/>

            Main content
        </div>
    );
}

export default Profile;