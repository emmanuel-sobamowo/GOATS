import React, {useState} from 'react'

const Welcome = ({name, nameInput, handleInput, handleFormSubmit}) => {
    
    return (
        <>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="username"> Username </label>
            <input type="text" name="username" id="username" placeholder="Enter your name"  onChange={handleInput}/>
            <input type="submit" value="update" />
        </form>
        <h5 aria-label="welcome" id="welcome">Here are some of our songs, {name ? name : 'stranger'}:</h5>       
        </>

    )
}

export default Greeting