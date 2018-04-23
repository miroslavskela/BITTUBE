import React from 'react';

import SingleHistoryVideo from './SingleHistoryVideo'
const HistoryVideos = (props) => {
    console.log(props.props);

    return (
        
            <div>
                  {props.props.map((video, index) =>{ 
                      
                  return <SingleHistoryVideo props={video} key={index}  index={index}  historyClick = {props.historyVideo}   />
                  })}
            </div>
        )
    
}

export default HistoryVideos