import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {InitialStateType, ProfileType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter} from "react-router-dom";

class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true}).then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
        })
    }

    render() {
        return <Header {...this.props}/>
    }
}

type MapStatePropsType = {
    profilePage: InitialStateType
}

type MapDispatchPropsType = {
    setAuthUserData: (userId: number, email: string, login: string) => void
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)
