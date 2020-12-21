import React from 'react';
import { route, Switch } from 'react-router-dom'
import Search from '../Search/component'
import './style.css';

function App() {
  return (
    <div data-testid="app-component">
      <Search/>
    </div>
  );
}

export default App;
