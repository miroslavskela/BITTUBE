import React, {Fragment} from 'react';

const VideoSingle = (props) => {
    console.log(props.index);
    
const getId = () => {
    props.sideClickList(props.index)
}
    return (
        
        <Fragment>
        <h6>{props.props.title}</h6>
        <img onClick={getId} width="100%" src={props.props.image} />
       
      </Fragment>
        )
    
}

export default VideoSingle