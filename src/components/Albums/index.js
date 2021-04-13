import React, { useState } from 'react';

const Albums = () => {
    const [album, setAlbum] = useState([
        {Album: "Blueprint", img: "https://cdn.vox-cdn.com/thumbor/StTmsoyoXOXhVDmnT8DwuZhkivQ=/0x0:1000x1000/1200x800/filters:focal(322x175:482x335)/cdn.vox-cdn.com/uploads/chorus_image/image/65059395/sqwgtcclwcmcsuwhdupj.9.jpg"},
        {Album: "Graduation", img: "https://cdn.vox-cdn.com/thumbor/RXOUUYeqiwnxGNgdPnG1TMHJL3g=/0x0:1000x896/1200x800/filters:focal(320x145:480x305)/cdn.vox-cdn.com/uploads/chorus_image/image/65065533/ignwucne3m5hoygftwih.0.jpg"},
        {Album: "Chilombo", img: "https://www.udiscovermusic.com/wp-content/uploads/2020/05/jhene-aiko-chilombo-deluxe.jpg"},
        {Album: "CTRL", img: "https://i.pinimg.com/originals/86/8e/d8/868ed8ef00af64d3c0b0d1f63000e1cf.jpg"},
        {Album: "Soulfly", img: "https://resources.tidal.com/images/4d556ce2/cbb4/4b36/a66b/07d7c67bf41f/640x640.jpg"},
    ])

    const renderRows = () => {
        return album.map(p =>
            <div className="card col-3">
                <img src={p.img} className="card-img-top" alt="Album Cover" />
                <div className="card-body">
                    <h5 className="card-title">{p.Album}</h5>
                </div>
            </div>
        )
    }
    return (
        <div className="row">
            { renderRows()}
        </div>
    )
}
export default Albums