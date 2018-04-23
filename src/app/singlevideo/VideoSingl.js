import React, {Fragment} from 'react';

const VideoSingle = (props) => {
    console.log(props.index);
    
const getId = () => {
    props.sideClickList(props.index)
}
    return (
        
        <Fragment>
        
        <img onClick={getId} width="100%" src={props.props.image} />
       
      </Fragment>
        )
    
}

export default VideoSingle