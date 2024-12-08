// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;






import React, { useState } from 'react';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';

const App: React.FC = () => {
  const [showSignUp, setShowSignUp] = useState(true);

  return (
    <div className="container">
      <h1>{showSignUp ? 'Sign Up' : 'Login'}</h1>
      {showSignUp ? <SignUpForm /> : <LoginForm />}
      <button className="toggle-btn" onClick={() => setShowSignUp(!showSignUp)}>
        {showSignUp ? 'Switch to Login' : 'Switch to Sign Up'}
      </button>
    </div>
  );
};

export default App;

