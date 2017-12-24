import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';
import axios from 'axios';
 class Searchbar extends Component{
    constructor(props) {
        super(props)
        this.state = {term:''};
        this.OnInputChange = this.OnInputChange.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }

    OnInputChange(event) {
     this.setState({term:event.target.value})
    }

    submitForm(event){
     event.preventDefault();
     console.log("this.props",this.props);
     this.props.fetchWeather(this.state.term);   
     this.setState({term:''})
    }
    render(){
        return(<form onSubmit={this.submitForm} className='input-group'>
        <input className="form-control" placeholder="Search" value={this.state.term} onChange={this.OnInputChange}/>
        <span className='input-group-btn'>
        <button type='submit' className='btn btn-secondary'>Search</button>
        </span>
        </form>);
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather},dispatch)
}

export default connect(null,mapDispatchToProps)(Searchbar)