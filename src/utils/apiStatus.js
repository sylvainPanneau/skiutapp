import React from 'react';
import Loader from 'react-loader-spinner'
import PropTypes from 'prop-types';

function ApiStatus({api, load, children, history}){

    const isArray = api instanceof Array

    if (history && api.status === "FAILED") {
        history.push("/")
    }

    if (isArray) {
        //@TODO ApiStatus for an array of api given in props.api

    } else {
        if (load === true) {
            let toReturn = api.status === "NEW" ?
                <div className="fullHeight fullWidth">{children}</div>
            :
                <div className="loader fullHeight fullWidth">
                    <div className = "loader-container">
                        <Loader type="Triangle" color="#343434" height={120} width={120}  />
                    </div>
                </div>
            return toReturn
        }else if (load === "onSuccess") {
            let toReturn = (api.status === "NEW" || api.status === "SUCCESS") ?
                <div className="fullHeight fullWidth">{children}</div>
            :
                <div className="loader fullHeight fullWidth">
                    <div className = "loader-container">
                        <Loader type="Triangle" color="#343434" height={120} width={120}  />
                    </div>
                </div>
            return toReturn
        }
        let toReturn = api.status === "SUCCESS" ?
            <div className="fullHeight fullWidth">{children}</div>
        :
            <div className="loader fullHeight fullWidth">
                <div className = "loader-container">
                    <Loader type="Triangle" color="#343434" height={120} width={120}  />
                </div>
            </div>

        return toReturn
    }
}

ApiStatus.propTypes = {
    api: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default ApiStatus;
