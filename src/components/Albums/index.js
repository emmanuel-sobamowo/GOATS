import React, { useState } from 'react';

const Albums = ({albums}) => {
    return (
        <div className= "card col-sm">
            <img src={albums.img} className="card-img-top" alt="Album Cover"/>
            <div className="card-body">
                <h4 className="card-title">{albums.artist}</h4>
                <h5 className="card-text">{music.album}</h5>
                <p className="card-subtext">{music.genre}</p>
            </div>
        </div>
    )
}
export default Albums