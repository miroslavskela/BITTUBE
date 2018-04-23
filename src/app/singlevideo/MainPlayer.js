import React, { Component, Fragment } from "react";


class MainPlayer extends Component {
  
  constructor(props) {
    super(props);
    console.log(props);
  } 
  
  

  render() {
    // console.log(this.props)
    return (
      <Fragment>
        <iframe 
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${this.props.selectedVideo.id}`}
        />
        <h4>{this.props.selectedVideo.title}</h4>
        <p>{this.props.selectedVideo.description}</p>
      </Fragment>
    );
  }
}

export default MainPlayer;