import React from 'react'
import './BookButton.css'

function BookButton() {

  // the functionality for the button redrirection 
  const buttonFunctionality = () => {
    // Change this link to the main link later on
    window.location.href = "https://www.youtube.com/";
  }  

  return (
    <div className='book-button'>
        <button onClick={buttonFunctionality}>
            Book Now
        </button>
    </div>
  )
}

export default BookButton