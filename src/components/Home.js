import React from 'react'
import "../styles/Home.css"

function Home({heading}) {
  //JS section - number 2
  
  return (
    <div>
      <h1 className='header'>
      {heading}
      </h1>
         <div> 
         <div class="image-container">
          <img class = 'Profile' src='https://i.ibb.co/d2Jrxh5/Balajianimated-Photo.jpg'alt='Profile'></img>
        <p>This is a description of the image. It could be a few lines long and will be displayed on the right side of the image.
        This is a description of the image. It could be a few lines long and will be displayed on the right side of the image.
        <br></br>
        This is a description of the image. It could be a few lines long and will be displayed on the right side of the image.
        </p>  
        </div>
    </div>
</div>
  )
}

export default Home