import React, {useState} from 'react';
import Loader from 'react-loader-spinner'


function ApiStatus(props){

    const isArray = props.api instanceof Array

    if (isArray) {
        //@TODO ApiStatus for an array of api given in props.api

    } else {
        let toReturn = props.api.status === "SUCCESS" ?
            <div className="fullHeight fullWidth">{props.children}</div>
        :
            <div className="loader fullHeight fullWidth">
                <div className = "loader-container">
                    <Loader type="Triangle" color="#343434" height={120} width={120}  />
                </div>
            </div>

        return toReturn
    }
}

export default ApiStatus;
