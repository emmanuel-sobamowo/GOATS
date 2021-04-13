import React from 'react';

const Artists = () => {
    const [artist, setArtist] = useState([
        {name: "Jay-z", Genre: "Rap"},
        {name: "Kanye West", Genre: "Rap"},
        {name: "Jhene Aiko", Genre: "RnB"},
        {name: "SZA", Genre: "RnB"},
        {name: "Rod Wave", Genre: "Rap/RnB"},
    ])

    const renderRows = () => {
        return artist.map(d => (
            <tr>
                <td>{d.name}</td>
                <td><a href={d.Genre}>Genre:</a></td>
            </tr>
        ))
    };
    return (
        <table style = {{border: "3px solid black", width: "100vw", textAlign: "left", padding: "15px"}}>
            <thead>
                <tr>
                    <th>Artist</th>
                    <th>Genre</th>
                </tr>
            </thead>
            <tbody>
                { renderRows() }
            </tbody>
            </table>
    )
}

export default Artists;