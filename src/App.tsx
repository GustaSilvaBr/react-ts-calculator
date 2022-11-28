import React from 'react';

import '../src/styles/global.scss'

import {Calculator} from './components/Calculator';
import {CalcProvider} from './contexts/CalcContext';

export function App() {
  return (
    <div className="App">
      <CalcProvider>
        <Calculator/>
      </CalcProvider>
    </div>
  );
}

export default App;
