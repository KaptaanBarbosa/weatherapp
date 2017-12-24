import React,{Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/googlemaps'
 class WeatherList extends Component{
     
    renderWeather(data){
        console.log("temp,data",data)
        const name = data.city.name;
        const temp = data.list.map(weather => weather.main.temp);
        const pressures = data.list.map(weather => weather.main.pressure);
        const humidities = data.list.map(weather => weather.main.humidity);
        const {lon,lat} = data.city.coord;
        console.log("lon",lon);
        console.log("temprature data ....",temp);
        return <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td>
          <Chart data={temp} color="red"/>
        </td>
        <td>
        <Chart data={pressures} color="yellow"/>
        </td>
         <td>
          <Chart data={humidities} color="green"/>
         </td>
        
        </tr>
    }
 render(){    
     return (<table className="table table-hover"> 
     <thead>
     <tr>
     <th>City</th>
     <th>Temprature</th>
     <th>Pressure</th>
     <th>Humidity</th>
     </tr>
     </thead>
     <tbody>
     {this.props.weather.map(this.renderWeather)}
     </tbody>
     </table>)
 }
}

function mapStateToProps(state){
    console.log("state....",state);
 return {weather:state.weather}//{weather} is equal to {weather:weather}
}

export default connect(mapStateToProps)(WeatherList);