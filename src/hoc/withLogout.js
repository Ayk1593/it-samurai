import React from "react";
import {connect} from "react-redux";

export const withLogout = (Component) => {

    class LogoutComponent extends React.Component {
        render() {
            if (!this.props.auth) {
                return <div></div>
            }
            return <Component {...this.props}/>
        }
    }

    let mapStateToPropsForRedirect = (state) => {
        return {
            auth: state.auth.isAuth
        }
    }

    let ConnectedWithLogoutComponent = connect(mapStateToPropsForRedirect)(LogoutComponent);

    return ConnectedWithLogoutComponent
}
