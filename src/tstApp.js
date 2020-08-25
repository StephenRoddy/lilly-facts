import React, { Component } from 'react';
//import Objects from './components/objects.js';
import Pictures from './components/pictures.js';
import Videos from './components/videos.js';


class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
        media: []
    };
  }

  componentDidMount(){

    let today = 'https://api.nasa.gov/planetary/apod?api_key=UrXJyJZWfOwzULw07rfPFuiur4cEsYCmC7WaSkTZ';
    let vidTst = 'https://api.nasa.gov/planetary/apod?date=2020-06-03&&api_key=UrXJyJZWfOwzULw07rfPFuiur4cEsYCmC7WaSkTZ';
    //vidTst is for testing to see if this works with a video.
    fetch(vidTst)
    .then(res => res.json())
    .then((data) => {
      this.setState({ media: data })
    })
    .catch(console.log)
  }


  render () {
    let conRend;
    if(this.state.media.media_type == 'video')
    {
      conRend = <Videos media={this.state.media} />
    }

    if(this.state.media.media_type == 'image')
    {
      conRend = <Pictures media={this.state.media} />
    }

    return (
      <div>
      {conRend}
      </div>
    )
  }
}

export default App;
