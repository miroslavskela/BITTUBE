import React, { Component, Fragment } from "react";
import logo from './logo.svg';
import './App.css';
import MainPlayer from './app/singlevideo/MainPlayer'
import { videoService } from "../src/services/SingleVideoService"
import Search from './app/singlevideo/Search'
import VideoList from './app/singlevideo/VideoList'
import HistoryVideos from './app/singlevideo/HistoryVideos'
import Utils from './app/shares/Utils'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedVideo: null,
      videos: [],
      defaultVideos: "java",
      history: [],

    };
  }

  componentDidMount() {
    videoService.fetchVideo(this.state.defaultVideos)
      .then(videos => this.setState({
        videos: videos,
        selectedVideo: videos[0],

      })

      ).then(() => {
        this.setState({
          history: [this.state.selectedVideo]

        })

      })
    

  }


  //calback za search

  getSearchValue = (value) => {
    videoService.fetchVideo(value)
      .then(videos => this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
      )
  }

  // select videos from side

  sideVideos = id => {
   for(let i = 0; i < this.state.history.length; i++){
     if(this.state.videos[id].title === this.state.history.title){
       break;
     }else{

       this.state.history.push(this.state.videos[id])
    }
    break;
  }
     
  console.log(this.state.history);
    this.setState({
      selectedVideo: this.state.videos[id],
    });

  }



  //watched videos

  historyVideos = title => {
    videoService.fetchVideo(title)
      .then(videos => {
        this.setState({
          selectedVideo: videos[0]
        });
      });

  }

  render() {

    if (this.state.videos.length === 0) {
      return <h1>Loading...</h1>
    }
    return (
      <Fragment>
        <Search props={this.getSearchValue} />
        <div className="container">
          <div className="row">
            <div className="col m7">

              {this.state.selectedVideo && (
                <MainPlayer selectedVideo={this.state.selectedVideo} />)}

            </div>

            <div className="col m2 push-m3">
              <VideoList props={this.state.videos} selectSideVideo={this.sideVideos} />
            </div>

          </div>
          <div className="row">
            <h4> History </h4>


            <HistoryVideos props={this.state.history} historyVideo={this.historyVideos} />


          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
