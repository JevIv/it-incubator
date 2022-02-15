import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/avatar-img.png"
import {UserType} from "../../redux/users-reducer";


type UsersPropsType = {
    totalUsersCount: number
    currentPage: number
    pageSize: number
    users: Array<UserType>
    onPageChanged: (page: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    isFetching: boolean
}

export const Users = (props: UsersPropsType) => {
    const pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    // for (let i = 1; i <= pageCount; i++) {
    //     if (pages.length < 10) {
    //         pages.push(i);
    //     }
    // }
    if (pageCount > 10) {
        if (props.currentPage > 5) {
            for (let i = props.currentPage - 4; i <= props.currentPage + 5; i++) {
                pages.push(i)
                if (i === pageCount) break
            }
        } else {
            for (let i = 1; i <= 10; i++) {
                pages.push(i)
                if (i === pageCount) break
            }
        }
    } else {
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? styles.seletedPage : " "}
                                 onClick={(e)=>{props.onPageChanged(p)}}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                    <div>
                    <img className={styles.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}
                         alt="Profile image"/>
                    </div>
                    <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>
                    }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};
