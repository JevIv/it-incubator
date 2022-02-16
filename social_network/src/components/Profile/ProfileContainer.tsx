import React from "react";
import {UsersPropsType} from "../Users/UsersContainer";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";


export class ProfileContainer extends React.Component{
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        usersPage: state.usersPage
    }
}

export default connect(mapStateToProps,{setUserProfile})(ProfileContainer)