import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom"
import {AppStateType} from "../../redux/redux-store";
import {InitialStateType, ProfileType, setUserProfile} from "../../redux/profile-reducer";


class ProfileContainer extends React.Component<ProfilePropsType>{
    let userId = this.props.match.params.userId
    if (!userId) {
        userId =2
}
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data)
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

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,{setUserProfile})(WithUrlDataContainerComponent)