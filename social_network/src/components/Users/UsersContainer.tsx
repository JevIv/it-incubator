import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {
    followAC,
    InitialStateType, setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


type MapStatePropsType = {
    usersPage: InitialStateType
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (curentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage,
        /*usersPage: state.usersPage.pageSize,
        usersPage: state.usersPage.totalUsersCount,
        usersPage: state.usersPage.currentPage,*/
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (curentPage: number) => {
            dispatch(setCurrentPageAC(curentPage));
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount));
        },
    }
}

export const UsersContainer =connect(mapStateToProps, mapDispatchToProps)(Users);