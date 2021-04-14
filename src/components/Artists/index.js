import React, { useState } from 'react';

const Artists = ({artists}) => {

  return (
    <div className="card col-sm">
      <img src={artists.img} className="card-img-top" alt="Album Cover"/>
      <div className="card-body">
        <h4 className="card-title">{artists.name}</h4>
        <h6 className="card-text">{artists.album}</h6>
      </div>
    </div>
  );
}

export default Artists;