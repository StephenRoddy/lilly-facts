import React, { Component } from 'react';
import DogFact from './components/dogFact.js';
import DogGif from './components/dogGif.js';
import Navbar from './components/navBar.js';
import DogHist from'./components/dogHist.js';
import NoDogFact from './components/noFacts.js';
import Lilly from './components/lilly.js';


let dogData ='';
class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
        fact: [],
        imgData: [],
        dogGif:'',
        dogImg:'',
        breed: '',
        height:'',
        weight:'',
        temper:'',
        job:'',
        isLoaded:''
    };
  }

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
  fetch('https://api.thedogapi.com/v1/images/search?api_key=1dd6d46e-d0e8-4b4c-a651-a8cc707742f2')
    .then(res2 => res2.json())
    .then((data) => {
      this.setState({ fact: data })
      this.setState({ dogImg: this.state.fact[0]["url"] })
      this.setState({ breed: this.state.fact[0].breeds[0]["name"] })
      this.setState({ height: this.state.fact[0].breeds[0]["height"].metric })
      this.setState({ weight: this.state.fact[0].breeds[0]["weight"].metric })
      this.setState({ temper: this.state.fact[0].breeds[0]["temperament"] })
      this.setState({ job: this.state.fact[0].breeds[0]["bred_for"] })

     })
     .catch(console.log)
  }

  render () {
    //console.log('The length value of height: ' + this.state.breed.length);
    let dogOut;

    if(this.state.breed.length < 1) {  // If breed is empty
    dogOut = <NoDogFact dogImg={this.state.dogImg} />;
  } else {
    dogOut = <DogFact
      fact={this.state.fact}
      breed={this.state.breed}
      height={this.state.height}
      weight={this.state.weight}
      temper={this.state.temper}
      job={this.state.job}
      dogImg ={this.state.dogImg}
      />
  }

// Return divides the page into columns and there is some conditional rendering to handle video. // Will replace with a component
// Conditional rendering to deal with images that have no information
    return (
      <div class="container-fluid">
      {<Navbar />}
      <div class="row">
        <div class="col-sm mb-3">

      {dogOut}
      {<DogHist />}

        </div>

        <div class="col-sm mb-3">
         {<DogGif
           imgData={this.state.imgData}
           dogGif={this.state.dogGif}
           />}
           {<Lilly />}
        </div>
      </div>

    </div>
    )
  }
}

export default App;
