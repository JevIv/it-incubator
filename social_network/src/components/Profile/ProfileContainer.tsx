import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {useMatch} from "react-router-dom"
import {AppStateType} from "../../redux/redux-store";
import {InitialStateType, ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {profileAPI} from "../../api/api";


type ProfileContainerPropsType = {
    match: any
} & ProfilePropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType>{

    componentDidMount() {
        let userId = this.props.match
            ? this.props.match.params.userId
            : 1
        profileAPI.getUser(userId)
            .then(data => {
                this.props.setUserProfile(data)
        })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profilePage.profile}/>
            </div>
        );
    }
}

type MapStatePropsType = {
    profilePage: InitialStateType
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

const mapStateToProps = (state: AppStateType) => {
    return {
        profilePage: state.profilePage
    }
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

const ProfileURLMatch = (props: ProfilePropsType) => {
    const match = useMatch<string>('/profile/:userId/');
    return <ProfileContainer {...props} match={match}/>;
}

export default connect(mapStateToProps,{setUserProfile})(ProfileURLMatch)