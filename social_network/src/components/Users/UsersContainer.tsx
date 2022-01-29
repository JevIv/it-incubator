import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";


const mapStateToProps = () => {
    return (
        users: state.users.Page.users
    )
}

const mapDispatchToProps = (dispatch) => {
    return (
        users: state.users.Page.users
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);