// import React from 'react';
// import './App.css';
// // import SignIn from './components/SignIn';
// // import SignUp from './components/SignUp'
// import Routes from './components/Routes';

// const App = () => 
//   <Routes />;
// export default App;

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SignIn from './Pages/SignIn';

function App() {
  return (
  <Router>
    <SignIn/>
  </Router>
  );
}

export default App;