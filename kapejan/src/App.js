// /src/App.js

import React from 'react';
import Checkout from './pages/checkout_page/Checkout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Kapejan</h1>
      </header>

      <main>
        {/* Render the Checkout component */}
        <Checkout />
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Kapejan</p>
      </footer>
    </div>
  );
}

export default App;
