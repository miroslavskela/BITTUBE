import React, { Component, Fragment } from "react";
import logo from './logo.svg';
import './App.css';
import MainPlayer from './app/singlevideo/MainPlayer'
import { videoService } from "../src/services/SingleVideoService"
import Search from './app/singlevideo/Search'
import VideoList from './app/singlevideo/VideoList'
import HistoryVideos from './app/singlevideo/HistoryVideos'
import Utils from './app/shares/Utils'
import debounce from 'lodash/debounce'


const history = localStorage.getItem('history')
class App extends Component {
  constructor(props) {
    super(props)
    if (history) {
      this.state = {
        selectedVideo: null,
        videos: [],
        defaultVideos: "java",
        history: JSON.parse(history),

      };
    } else {
      this.state = {
        selectedVideo: null,
        videos: [],
        defaultVideos: "java",
        history: [],
      };
    }
    

  }
  componentDidMount() {
    videoService.fetchVideo(this.state.defaultVideos)
      .then(videos => this.setState({
        videos: videos,
        selectedVideo: videos[0],
      })
      ).then(() => {
        if (history) {
          this.setState({
            history: JSON.parse(history)

          })
        } else {
          this.setState({
            history: [this.state.selectedVideo]

          })
        }
      }).then(() => {
        localStorage.setItem('history', JSON.stringify(this.state.history))
      
      })


  }



  //calback za search

  getSearchValue = debounce(((value) => {
    videoService.fetchVideo(value)
      .then(videos => this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
      ).then(() => {
        if (Utils.checkArray(this.state.history, this.state.videos[0])) {
          console.log(Utils.checkArray(this.state.history, this.state.videos[0]));
        } else {
          this.state.history.push(this.state.videos[0])
          localStorage.setItem('history', JSON.stringify(this.state.history))
        }
      }).then(() => {

        this.setStateFromStorage()
      })
     
      
  }), 2000)


  setStateFromStorage = () => {
   const history1 = localStorage.getItem('history')
    this.setState({
      history:JSON.parse(history1)
    })
    
  }

  // select videos from side

  sideVideos = id => {
    this.setState({
      selectedVideo: this.state.videos[id],
    });

    if (Utils.checkArray(this.state.history, this.state.videos[id])) {
      console.log(Utils.checkArray(this.state.history, this.state.videos[id]));
    } else {
      this.state.history.push(this.state.videos[id])
      localStorage.setItem('history', JSON.stringify(this.state.history))
    }

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
