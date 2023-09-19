/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const Child = ({ data, showData, handleShow }) => {
  return (
    <div style={{ width: '50%', margin: '50px auto', boxShadow: '1px 1px 3px darkgray', padding: '0 20px' }}>
      <div onClick={handleShow} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
        <h1>{data.name}</h1>
        <span>{showData ? '🔼' : '🔽'}</span>
      </div>
      <div>
        {showData && <h3>{data.info}</h3>}
      </div>
    </div>
  );
};

export default Child;
