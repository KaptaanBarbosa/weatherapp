import React,{Component} from 'react';

class GoogleMap extends Component{
componentDidMount(){
    console.log("this.props.lat",this.props.lat,"this.props.lon",this.props.lon);
    new google.maps.Map(document.getElementById('map'),{
        zoom:12,
        centre:{
            lat:this.props.lat,
            lng:this.props.lon
        }
    });
}
render(){
    return <div id="map" ref="map"/>;
    
}
}

export default GoogleMap 