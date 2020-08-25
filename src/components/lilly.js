// src/components/objects.js
import React from 'react'

const Lilly = (props) => {

return(
<div class="opacity-5 mt-3 shadow-lg">
  <div class="card-body">
  <h5 classs="card-title">Lilly</h5>
  <h6 class="card-subtitle mb-2 text-muted">Facts about Lilly</h6>
  <img class="img-fluid rounded mx-auto d-block" src= {require('../assets/lilly/lilly.jpg')} width = '500' alt ="Lilly" />
  <p class="card-text mx-auto mt-3"><b>Lilly is a Labrador.</b></p>
  <p class="card-text mx-auto mt-3"><b>She will grow to: </b>between 55 - 60cm in height, and 25 - 32kg in weight.</p>
  <p class="card-text mx-auto mt-3"><b>She is: </b>Intelligent, Kind, Trusting and Outgoing.</p>
  <p class="card-text mx-auto mt-3"><b>Her job is: </b>Fishing!! Labradors help catch fish on fishing boats.</p>

</div>
</div>
  )
};
export default Lilly
