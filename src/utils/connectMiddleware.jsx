import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import * as sel from "./selectors"

const ConnectMiddleware = ({
  history,
  location,
  user_auth,
  isShotgun,
  isAdmin,
  authorizedPathnames,
  children
}) => {
  const { pathname } = location;

  React.useEffect(() => {
    if( !authorizedPathnames.includes(pathname) && (!user_auth || !user_auth.auth ) && location.pathname !== '/login') {
      history.push('/login');
    }
    if (user_auth.auth && (location.pathname === "/login" || location.pathname === "/loginTremplin")){
      history.push("/");
    }
    if (!isAdmin && location.pathname === "/admin") {
      history.push('/');
    }
    if (!isShotgun && location.pathname === "/compte") {
      history.push('/');
    }
  }, [user_auth, isShotgun, isAdmin, pathname, authorizedPathnames]);

  return children;
}

ConnectMiddleware.propTypes = {
  history: PropTypes.any.isRequired,
  location: PropTypes.object.isRequired,
  user_auth: PropTypes.object,
  authorizedPathnames: PropTypes.array,
  children: PropTypes.node.isRequired,
};

ConnectMiddleware.defaultProps = {
  user_auth: {},
  authorizedPathnames: [],
};

const mapStateToProps = (state) => ({
  user_auth: sel.userGlobal(state),
  isShotgun: sel.userInfo(state),
  isAdmin: sel.isAdmin(state)
});

export default withRouter(connect(mapStateToProps)(ConnectMiddleware));
