import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://www.bracknell-forest.gov.uk/sites/default/files/the-look-out-swinley-forest-header-image.jpg"
                    alt=""/>
            </div>
            <div>
                avatar + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>

            Main content
        </div>
    );
}

export default Profile;