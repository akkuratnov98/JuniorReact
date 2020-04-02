import React from 'react';
import './App.css';
import NavigationBar from "./Component/NavigationBar.js";
import Table from "./Component/Table";

function App() {
  return (
    <div className="App">
        <NavigationBar />
        <div className="App-body">
            <Table  />
        </div>
    </div>
  );
}

export default App;
