import React from 'react';
import './App.css';

//import components
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
      </header>
      <hr/>
    </div>
  );
}

export default App;
