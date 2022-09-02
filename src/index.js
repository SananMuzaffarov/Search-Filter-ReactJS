import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Filter from './Components/Filter';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

const App = () => {
  return(
    <div>
      <Filter />
    </div>
  );
}
root.render(<App />);