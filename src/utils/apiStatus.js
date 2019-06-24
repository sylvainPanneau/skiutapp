import React from 'react';
import Loader from 'react-loader-spinner'

function ApiStatus(){
  return (
        <div className = "loader-container">
          <Loader type="Triangle" color="#343434" height={120} width={120}  />
        </div>
    )
}

export default ApiStatus;
