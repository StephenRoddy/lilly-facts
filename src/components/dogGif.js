// src/components/objects.js
import React from 'react'

const DogGif = (props) => {

return (
<div>
      <div class="opacity-5 shadow-lg">
        <div class="card-body">
        <h5 classs="card-title">Information</h5>
        <h6 class="card-subtitle mb-3 text-muted">What is this website?</h6>
          <img class="img-fluid rounded mx-auto d-block" src= {props.dogGif} />
          <div>
            <p class="card-text mx-auto mt-3">Welcome to Isabelle's Dog Facts.</p>
            <p>This is a place where Isabelle Ryan can visit once a day to see some dogs, learn some new facts about dogs, and watch a funny dog video.</p>
            <p>Isabelle can also learn facts about her own dog Lilly here too.</p>
            <p>This website is a birthday present to Isabelle Ryan for her 5th birthday from her uncle Stephen</p>
            <p>She can visit this website any tinme that her Mom and Dad allow her.</p>
            </div>
          <div>
          </div>
        </div>
      </div>
  </div>
  )
};
export default DogGif
