import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavbarComp from './components/Navbar';
import NoteHome from './components/Notes/NoteHome';
import About from './components/About';
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <NavbarComp />
          <div className='container'>
            <Routes>
              <Route exact path="/" element={<NoteHome />}></Route>
              <Route exact path="/about" element={<About />}></Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
