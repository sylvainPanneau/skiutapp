import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as c from "../skiutconstants";
import PropTypes from "prop-types";

const ConnectMiddleware = ({
  history,
  location,
  user_auth,
  authorizedPathnames,
  children
}) => {
  const { pathname } = location;

  React.useEffect(() => {
    if( !authorizedPathnames.includes(pathname) && (!user_auth || !user_auth.auth ) && location.pathname !== '/login') {
      history.push('/login');
    }
  }, [user_auth, pathname, authorizedPathnames]);

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
  user_auth: state[c.META]['data']['user'],
});

export default withRouter(connect(mapStateToProps)(ConnectMiddleware));
