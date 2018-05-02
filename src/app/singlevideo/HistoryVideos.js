import React, { Component, Fragment } from "react";

import SingleHistoryVideo from './SingleHistoryVideo'
const history = localStorage.getItem('history')
class HistoryVideos extends Component  {
    constructor(props){
        super(props)
        this.state = {
            history:this.props.props
        }
        console.log(this.props);
    }
    
   
    
   
    componentWillReceiveProps(props){
        
        this.setState({
            history:this.props.props
        })
    }
   
render(){
    return (
        
            <div>
                  {this.state.history.map((video, index) =>{ 
                      
                  return <SingleHistoryVideo props={video} key={index}  index={index}  historyClick = {this.props.historyVideo}   />
                  })}
            </div>
        )
    }
    
}

export default HistoryVideos