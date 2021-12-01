import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./Profileinfo/ProfileInfo";
import {RootStateType} from "../../redux/state";

const Profile = (props: RootStateType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.}/>

            Main content
        </div>
    );
}

export default Profile;