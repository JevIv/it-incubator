import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {Navigate, useMatch} from "react-router-dom"
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, InitialStateType} from "../../redux/profile-reducer";


type ProfileContainerPropsType = {
    match: any
} & ProfilePropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType>{

    componentDidMount() {
        let userId = this.props.match
            ? this.props.match.params.userId
            : 1
        this.props.getUserProfile(userId)
    }

    render() {
        if (!this.props.isAuth) return <Navigate to={"/login"}/>
        return (
            <div>
                <Profile {...this.props} profile={this.props.profilePage.profile}/>
            </div>
        );
    }
}

type MapStatePropsType = {
    profilePage: InitialStateType
    isAuth: boolean
}

type MapDispatchPropsType = {
    //setUserProfile: (profile: ProfileType) => void
    getUserProfile: (userId: number) => void
}

const mapStateToProps = (state: AppStateType) => {
    return {
        profilePage: state.profilePage,
        isAuth: state.auth.isAuth
    }
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

const ProfileURLMatch = (props: ProfilePropsType) => {
    const match = useMatch<string>('/profile/:userId/');
    return <ProfileContainer {...props} match={match}/>;
}

export default connect(mapStateToProps,{getUserProfile})(ProfileURLMatch)