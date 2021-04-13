import React, { useState } from 'react';
import { Greeting, Header } from '../../components';
const Homepage = () => {
    
const [music, setMusic] = useState([
    {name: "Jay-z", Genre: "Rap", Album: "Blueprint", img: "https://cdn.vox-cdn.com/thumbor/StTmsoyoXOXhVDmnT8DwuZhkivQ=/0x0:1000x1000/1200x800/filters:focal(322x175:482x335)/cdn.vox-cdn.com/uploads/chorus_image/image/65059395/sqwgtcclwcmcsuwhdupj.9.jpg"},
    {name: "Kanye West", Genre: "Rap", Album: "Graduation", img: "https://cdn.vox-cdn.com/thumbor/RXOUUYeqiwnxGNgdPnG1TMHJL3g=/0x0:1000x896/1200x800/filters:focal(320x145:480x305)/cdn.vox-cdn.com/uploads/chorus_image/image/65065533/ignwucne3m5hoygftwih.0.jpg"},
    {name: "Jhene Aiko", Genre: "RnB", Album: "Chilombo", img: "https://www.udiscovermusic.com/wp-content/uploads/2020/05/jhene-aiko-chilombo-deluxe.jpg"},
    {name: "SZA", Genre: "RnB", Album: "CTRL", img: "https://i.pinimg.com/originals/86/8e/d8/868ed8ef00af64d3c0b0d1f63000e1cf.jpg"},
    {name: "Rod Wave", Genre: "Rap/RnB", Album: "Soulfly", img: "https://resources.tidal.com/images/4d556ce2/cbb4/4b36/a66b/07d7c67bf41f/640x640.jpg"},
])
  const [name, setName] = useState("stranger");
  const [nameInput, setNameInput] = useState('');

  const handleInput = (e) => {
    setNameInput(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setName(nameInput);
    setNameInput('');
  }

  const renderMusic = () => {
    return music.map(m =>
      <Music music={m} key={m.id}/>
    );
  }

  return (
    <main aria-label="main" className="container">
      <Header />
      <Greeting name={name} nameInput={nameInput} handleInput={handleInput} handleFormSubmit={handleFormSubmit} />
      <div className="row justify-content-center">
        { renderMusic() }
      </div>
    </main>
  )
  }

export default Homepage;