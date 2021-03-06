import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

class ProtectedRoute extends Component {
    render() {
        let { path, component, isAuthenticated } = this.props;
        return (
            isAuthenticated ?
                <Route path={path} component={component} /> :
                <Redirect to="/" />
        )
    }
}

const mapStateToProps = state => ({ isAuthenticated: state.auth.isAuthenticated });

export default connect(mapStateToProps, {})(ProtectedRoute);
