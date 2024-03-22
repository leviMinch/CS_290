import ExerciseList from '../components/ExerciseList';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import React from 'react';


function HomePage({ setExerciseToEdit}) {
    const [exercises, setExercises] = useState([]);
    const navigate = useNavigate();

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setExercises(data);
    }

    const onDelete = async (_id) => {
        const response = await fetch(`exercises/${_id}`, {method: 'DELETE'});
        if (response.status === 204){
            setExercises(exercises.filter(exercise => exercise._id !== _id));
        }else{
            alert(`Failed to delete exercise with _id ${_id}, status code = ${response.status}`);
        }
    }

    const onEdit = exercise => {
        setExerciseToEdit(exercise);
        navigate(`/edit-exercise`);
    }

    useEffect(() => {
        loadExercises();
    }, []);
    return (
        <div>
            <h2>List of Exercises</h2>
            <ExerciseList exercises = {exercises} onDelete={onDelete} onEdit = {onEdit}></ExerciseList>
        </div>
    );
}

export default HomePage;