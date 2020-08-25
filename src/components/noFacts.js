//noFacts.js

import React from 'react'

const NoDogFact = (props) => {

return (
<div>

      <div class="opacity-5 shadow-lg">
        <div class="card-body">
          <h5 classs="card-title">Facts about Dogs</h5>
          <h6 class="card-subtitle mb-2 text-muted">for Isabelle</h6>
          <img class="img-fluid rounded mx-auto d-block" src= {props.dogImg} />
          <div>
            <p class="card-text mx-auto mt-3">This dog is a mystery!</p>
            <p class="card-text mx-auto mt-3">We have no facts about this magnificent beast...</p>

          </div>
        </div>
      </div>
  </div>
  )
};
export default NoDogFact
