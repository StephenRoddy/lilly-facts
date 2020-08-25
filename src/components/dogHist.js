// src/components/objects.js
import React from 'react'

// objects is the parameter passed to a fubction called Objects (defined by const).
// What the function does is everything after the fat arrow

const DogHist = ({ media }) => {
//  console.log({objects.near_earth_objects[1]});
return (
<div>
  {
    <div class="opacity-5 mt-3 shadow-lg">
        <div class="card-body">
          <h5 classs="card-title">A Brief History of Dogs</h5>
          <h6 class="card-subtitle mb-2 text-muted">National Geographic</h6>
          <div class="embed-responsive embed-responsive-16by9 mx-auto d-block">

<<<<<<< HEAD
          <video controls>
          <source src='https://www.dropbox.com/s/nl9h8noxb9fp5yq/briefCut.mp4?raw=1' type="video/mp4" />
          <source src='https://www.dropbox.com/s/0z27etsdcdb6nfp/briefCut.ogv?raw=1' type="video/ogg" />
          </video>
=======
            <iframe width="560" height="315"
            src="https://www.youtube.com/embed/WR16wyrADo8"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
>>>>>>> 36d9ce72220b9ade4363ea83164d152eaeb4dfb0

          </div>
          <div>
          </div>
      </div>
    </div>
  }
</div>
  )
};

<<<<<<< HEAD

export default DogHist


// Add this in later problem with file:           <source src={require('https://www.dropbox.com/s/0z27etsdcdb6nfp/briefCut.ogv?raw=1')} type="video/ogg" />

/*

 <iframe width="560" height="315"
 src="https://www.youtube.com/embed/WR16wyrADo8"
 frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
*/
=======
export default DogHist
>>>>>>> 36d9ce72220b9ade4363ea83164d152eaeb4dfb0
