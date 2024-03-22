import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import { useState} from 'react';
import Navigation from './components/Navigation';


function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();
  return (
    <div className="App">
      <div className = "header">
        <h1>
          Exercise Tracker
        </h1>
        <p>
          Full Stack MERN App Demostration<br/>
          This is a simple exercise tracker application. You can add, edit, and delete exercises.
        </p>
      </div>
      <Router>
        <Navigation/>
        <div className = "App-header">
        <Routes>
            <Route path = "/" element={<HomePage setExerciseToEdit = {setExerciseToEdit} />} />
            <Route path= "/add-exercise" element={<AddExercisePage />} />
            <Route path = "/edit-exercise" element={<EditExercisePage exerciseToEdit = {exerciseToEdit} />} />
          </Routes>
        </div>
      </Router>
      <footer>
        <p>© 2024 Levi Minch</p>
      </footer>
    </div>
  );
}

export default App;
