import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./Profileinfo/ProfileInfo";
import {PostType} from "../../index";

type PropsType = {
    postData: Array<PostType>
}

const Profile = (props: PropsType) => {



    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.state.posts}/>

            Main content
        </div>
    );
}

export default Profile;