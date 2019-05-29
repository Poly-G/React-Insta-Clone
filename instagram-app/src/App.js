import React, { Component } from 'react'
import './App.css';

//import components
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

// import dummy data
import dummyData from './dummy-data';

class App extends Component {
  state = {
    data: dummyData
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
        <hr />
        <PostContainer data={this.state.data}/>
      </div>
    );
  }
}

export default App;
