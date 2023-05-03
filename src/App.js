import React from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals.js';


function App() {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
