import React from 'react';

import {Greeting, Albums, Artists, Header} from './components'

function App(){
    return (
        <>
        <div className="container">


            <Header />
            <Greeting />
    
            <Artists />
            <Albums />
        </div>
        
        </>
    );
}


export default App