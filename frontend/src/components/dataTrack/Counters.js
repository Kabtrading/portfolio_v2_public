import React, {Component} from 'react';


class Counters extends Component {
    render(){
        return(
            
            <div className='counters' style={{ color: '#000'}}>
               <p>Page views: {this.props.pageViews}</p>
            </div>
            
        )
    }
}
            


export default Counters;