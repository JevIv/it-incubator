import React from "react";
import ProfileInfo, {ProfileInfoType} from "./Profileinfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props: ProfileInfoType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>

            Main content
        </div>
    );
}

export default Profile;