import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/avatar-img.png"
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";


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
                        <NavLink to={"/profile/" + u.id}>
                            <img className={styles.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}
                                 alt="Profile image"/>
                         </NavLink>
                    </div>
                    <div>
                    {u.followed
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                {withCredentials: true,
                                headers: {
                                    "API-KEY": "0cef6ec5-ea0b-4679-beff-cc75700e3c68"
                                }}).then(response => {
                                if (response.data.resultCode === 0) {
                                    props.unfollow(u.id)
                                }
                            })
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                {withCredentials: true,
                                    headers: {
                                        "API-KEY": "0cef6ec5-ea0b-4679-beff-cc75700e3c68"
                                    }}).then(response => {
                                if (response.data.resultCode === 0) {
                                    props.follow(u.id)
                                }
                            })
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
