import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {InitialStateType, setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {authAPI} from "../../api/api";


class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        authAPI.loginUser()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    this.props.setAuthUserData(id, email, login)
                }
        })
    }

    render() {
        return <Header login={this.props.auth.login} isAuth={this.props.auth.isAuth}/>
    }
}

type MapStatePropsType = {
    auth: InitialStateType
}

type MapDispatchPropsType = {
    setAuthUserData: (userId: number, email: string, login: string) => void
}

export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType  => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)
