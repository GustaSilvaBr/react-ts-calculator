import React from 'react';

import '../src/styles/global.scss'

import {Calculator} from './components/Calculator';

export function App() {
  return (
    <div className="App flex">
        <Calculator/>
    </div>
  );
}

export default App;
