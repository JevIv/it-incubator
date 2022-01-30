import React from "react";
import styles from "./users.module.css";
import {PHOTO_URL} from "../../redux/users-reducer";


export const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
        {
            id: 1,
            fullName: "My first post",
            status: "I am a boss",
            location: {city: "Minsk", country: "Belarus"},
            photoUrl: PHOTO_URL,
            followed: true,
        },
        {
            id: 2,
            fullName: "Olya",
            status: "Happy",
            location: {city: "Falesti", country: "Moldova"},
            photoUrl: PHOTO_URL,
            followed: false,
        },
        {
            id: 3,
            fullName: "Evgeny",
            status: "Busy person",
            location: {city: "Liepaja", country: "Latvia"},
            photoUrl: PHOTO_URL,
            followed: true,
        },
        {
            id: 4,
            fullName: "Sam",
            status: "I am a strong man",
            location: {city: "Ipswich", country: "United Kingdom"},
            photoUrl: PHOTO_URL,
            followed: false,
        },
        {
            id: 5,
            fullName: "Bob",
            status: "Nothing special",
            location: {city: "London", country: "United Kingdom"},
            photoUrl: PHOTO_URL,
            followed: false,
        },
        {
            id: 6,
            fullName: "Jacob",
            status: "Alright",
            location: {city: "Colchester", country: "United Kingdom"},
            photoUrl: PHOTO_URL,
            followed: true,
        },
    ])
    }


    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={styles.userPhoto} src={u.photoUrl} alt="Profile image"/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={()=> {props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={()=> {props.follow(u.id)}}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

