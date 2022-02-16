import React from "react";
import ProfileInfo from "./Profileinfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>

            Main content
        </div>
    );
}

export default Profile;