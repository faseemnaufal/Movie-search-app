import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

//const container = document.getElementById('app');
//const root = createRoot(container); // createRoot(container!) if you use TypeScript

//root.render(<App />);

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
//ReactDOM.render(<App />, document.getElementById('root'));