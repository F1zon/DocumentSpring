import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from "./DockList";
import BookEdit from "./DockEdit";
import DockList from './DockList';
import DockEdit from './DockEdit';


const App = () => {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path='/books' exact={true} element={<DockList/>}/>
          <Route path='/books/:id' element={<DockEdit/>}/>
        </Routes>
      </Router>
  )
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
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

export default App;
