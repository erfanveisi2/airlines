import logo from './logo.svg';
import './App.css';
import {Component} from 'react'
import {CardList} from "./card-list/card-list.component";
import {Card} from "./card/card.component";

class App extends Component{
  constructor() {
    super();

    this.state={
      data:[],
      searchBox:''
    }
  }

  componentDidMount() {
    fetch("https://iata-and-icao-codes.p.rapidapi.com/airlines", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "iata-and-icao-codes.p.rapidapi.com",
        "x-rapidapi-key": "dc6325344amshd5d53c6714706dap1c52f2jsn99e5407ef735"
      }
    })
        .then(response=>response.json())
        .then(response => {
         this.setState({data:response}) ;console.log(response);
        })
        .catch(err => {
          console.error(err);
        });
  }

  handleChange=(e)=>{
      this.setState({searchBox:e.target.value})
  }

  render() {
      const {data , searchBox}=this.state
      const filteredAirlines=data.filter(
          airlines=>airlines.name.toLowerCase().includes(searchBox.toLowerCase())
      )
    return(
        <div className='App'>
          <input onChange={this.handleChange} placeholder='search airlines'/>
          <CardList data={filteredAirlines}/>
        </div>
    )
  }
}

export default App;
