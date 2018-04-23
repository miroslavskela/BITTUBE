import React from 'react';

import VideoSingle from './VideoSingl'
const VideoList = (props) => {
    console.log(props.videos);

    return (
        
            <div>
                  {props.props.map((video, index) =>{ 
                      
                  return <VideoSingle props={video} key={index} index={index}  sideClickList = {props.selectSideVideo}   />
                  })}
            </div>
        )
    
}

export default VideoList