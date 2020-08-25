// src/components/objects.js
import React from 'react'

const DogFact = (props) => {

return (
<div>
      <div class="opacity-5 shadow-lg">
        <div class="card-body">
          <h4 classs="card-title">Facts about Dogs</h4>
          <h6 class="card-subtitle mb-2 text-muted">for Isabelle</h6>
          <img class="img-fluid rounded mx-auto d-block" src= {props.dogImg} />
          <div>
            <p class="card-text mx-auto mt-3"><b>This dog is a: </b>{props.breed}.</p>
            <p class="card-text mx-auto mt-3"><b>She is between: </b>{props.height} cm in height, and {props.weight} kg in weight.</p>
            <p class="card-text mx-auto mt-3"><b>She is: </b>{props.temper}.</p>
            <p class="card-text mx-auto mt-3"><b>Her job is: </b>{props.job}.</p>


          </div>
        </div>
      </div>
  </div>
  )
};
export default DogFact


/*

componentDidMount(){

  //fist call gets an image from api1
fetch('https://api.thedogapi.com/v1/images/search?mime_types=gif&&api_key=1dd6d46e-d0e8-4b4c-a651-a8cc707742f2') // use a header for the api keey value pair
  .then(res => res.json())
  .then((data) => {
    this.setState({ imgData: data })
    this.setState({ dogGif: this.state.imgData[0].url }) // Extract out dog imageUrl and pass as prop to dog componenbt
    //console.log('Here is the dog image: ' + this.state.dog);
  })
  .catch(console.log)
// second call gets an image from api 2
fetch('https://api.thedogapi.com/v1/images/search?mime_types=png&&api_key=1dd6d46e-d0e8-4b4c-a651-a8cc707742f2')
  .then(res2 => res2.json())
  .then((data) => {
    this.setState({ fact: data })
    console.log('this.state.fact: ')
    console.log(this.state.fact)

    console.log('This dog is a ' + this.state.fact[0].breeds[0]["name"])

    console.log('She is between: ' + this.state.fact[0].breeds[0]["height"].metric + 'cm in height, and ' + this.state.fact[0].breeds[0]["weight"].metric + 'kg in weight.')

    console.log('She is ' + this.state.fact[0].breeds[0]["temperament"])
  //  console.log(this.state.fact[0].breeds[0]["temperament"])

    console.log('Her Job is ' + this.state.fact[0].breeds[0]["bred_for"])




   })
   .catch(console.log)
}

*/
