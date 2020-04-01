import React from 'react';
import './App.css';
import NavigationBar from "./Component/NavigationBar.js";
import Table from "./Component/Table";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <NavigationBar />
      </header>
      <body>
        <Table/>
      </body>
    </div>
  );
}

export default App;
