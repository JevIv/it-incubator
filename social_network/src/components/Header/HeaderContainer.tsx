import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {InitialStateType, setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";


class HeaderContainer extends React.Component<HeaderPropsType> {
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
