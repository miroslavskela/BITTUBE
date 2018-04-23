import React, {Fragment} from 'react';

const SingleHistoryVideo = (props) => {
   
    
const getTitle = () => {
    props.historyClick(props.props.title)
}
    return (
        
        <Fragment>
        <div className = "col 4">
        <h6>{props.props.title}</h6>
        <img onClick={getTitle} width="100%" src={props.props.image} />
       </div>
      </Fragment>
        )
    
}

export default SingleHistoryVideo