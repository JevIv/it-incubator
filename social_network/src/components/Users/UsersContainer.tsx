import React from "react";
import {connect} from "react-redux";
import {
    followUserThunkCreator, getUsersThunkCreator,
    InitialStateType, setCurrentPage, setTotalUsersCount,
    setUsers, toggleFollowingProgress, toggleIsFetching,
    unFollowUserThunkCreator,
    UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {Preloader} from "../../common/Preloader/Preloader";


class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {

        this.props.getUsersThunkCreator(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
    }

    onPageChanged = (pageNumer: number) => {
        this.props.getUsersThunkCreator(pageNumer, this.props.usersPage.pageSize)
    }

    render() {

        return <>
            {this.props.usersPage.isFetching ? <Preloader/> : null}
            <Users
                   followingInprogress={this.props.usersPage.followingInprogress}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   totalUsersCount={this.props.usersPage.totalUsersCount}
                   currentPage={this.props.usersPage.currentPage}
                   isFetching={this.props.usersPage.isFetching}
                   pageSize={this.props.usersPage.pageSize}
                   users={this.props.usersPage.users}
                   onPageChanged={this.onPageChanged}
                   unFollowUserThunkCreator={this.props.unFollowUserThunkCreator}
                   followUserThunkCreator={this.props.followUserThunkCreator}
            />
        </>
    }
}

type MapStatePropsType = {
    usersPage: InitialStateType
}

type MapDispatchPropsType = {
    followUserThunkCreator: (userId: number) => void
    unFollowUserThunkCreator: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (curentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage
    }
}
export default connect(mapStateToProps,
    {followUserThunkCreator, unFollowUserThunkCreator, setUsers, setCurrentPage,
        setTotalUsersCount, toggleIsFetching, toggleFollowingProgress,
        getUsersThunkCreator})(UsersContainer)