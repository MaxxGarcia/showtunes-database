import React, { Component } from 'react';
import AdminPortal from "./AdminPortal";
import Search from "./Search";

class App extends Component {
  render() {
    return (
      <div className="appWrapper">
        <AdminPortal />
        <Search />
      </div>
    );
  }
}

export default App;
