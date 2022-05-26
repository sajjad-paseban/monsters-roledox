import React, {Component} from 'react';
import './bootstrap.css';
import { CardList } from './components/card-list/card-list.component';
import { LogoBox } from './components/logo-box/logo-box.components';
import './App.css';
import { SearchBox } from './components/search-box/search-box.components';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField: ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({monsters:data}))
    
  }
  
  handleChange = e => this.setState({searchField: e.target.value})
  
  render(){
    const filter = this.state.monsters.filter(monster => monster.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
    return(
      <div className="App container">
        <LogoBox />
        <SearchBox handleChange={this.handleChange} />
        <CardList monsters={filter} />
      </div>
    );
  }
}

export default App;
