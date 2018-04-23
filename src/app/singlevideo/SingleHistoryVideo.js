import React, {Fragment} from 'react';

const SingleHistoryVideo = (props) => {
   
    
const getId = () => {
    props.historyClick(props.props.title)
}
    return (
        
        <Fragment>
        
        <img onClick={getId} width="100%" src={props.props.image} />
       
      </Fragment>
        )
    
}

export default SingleHistoryVideo