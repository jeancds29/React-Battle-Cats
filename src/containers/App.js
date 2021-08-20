import React, { Component } from 'react';
import CardList from '../components/card-list/CardList';
import SearchBox from '../components/search-box/SearchBox';
import Scroll from '../components/Scroll';
import cats from '../cats.js'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      cats: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    this.setState({cats: cats})
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { cats, searchfield } = this.state;
    const filteredCats = cats.filter(cat =>{
      return cat.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    
    return !cats.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Battle Cats</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList cats={filteredCats} />
          </Scroll>
        </div>
      );
  }
}

export default App;