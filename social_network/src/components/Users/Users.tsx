import React from "react";
import styles from "./users.module.css";
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from "../../assets/images/avatar-img.png"


export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumer: number) => {
        this.props.setCurrentPage(pageNumer)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumer}&count=${this.props.usersPage.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        const pageCount = Math.ceil(this.props.usersPage.totalUsersCount / this.props.usersPage.pageSize)
        const pages = []
        // for (let i = 1; i <= pageCount; i++) {
        //     if (pages.length < 10) {
        //         pages.push(i);
        //     }
        // }
        if (pageCount > 10) {
            if (this.props.usersPage.currentPage > 5) {
                for (let i = this.props.usersPage.currentPage - 4; i <= this.props.usersPage.currentPage + 5; i++) {
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
                            // @ts-ignore
                            return <span className={this.props.usersPage.currentPage === p && styles.seletedPage}
                            onClick={(e)=>{this.onPageChanged(p)}}>{p}</span>
                        })}
                    </div>
                {
                    this.props.usersPage.users.map(u => <div key={u.id}>
                    <span>
                    <div>
                    <img className={styles.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}
                    alt="Profile image"/>
                    </div>
                    <div>
                    {u.followed
                        ? <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            this.props.follow(u.id)
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
        )
    }
}