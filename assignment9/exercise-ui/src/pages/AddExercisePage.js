import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AddExercisePage = (exercise) => {
    const [name, setName] = useState('');
    const [reps, setReps] = useState();
    const [unit, setUnit] = useState('lbs'); //default to lbs
    const [weight, setWeight] = useState('');
    const [date, setDate] = useState('');

    const navigate = useNavigate();

    const addExercise = async () => {
        const newExercise = {name, reps: Number(reps), weight: Number(weight), unit, date};
        const response = await fetch('/exercises', {
                method: 'POST',
                body: JSON.stringify(newExercise),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        if(response.status === 201) {
            alert("Successfully added the exercise");
        }else{
            alert(`Failed to add the exercise, status code = ${response.status}`);
        }
        navigate('/');
    };
    return (
        <div className="form-container">
            <h1>Add Exercise</h1>
            <div className="form-row">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-row">
                <label htmlFor="reps">Reps</label>
                <input id="reps" type="number" value={reps} onChange={(e) => setReps(e.target.value)} />
            </div>
            <div className="form-row">
                <label htmlFor="weight">Weight</label>
                <input id="weight" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div className="form-row">
                <label htmlFor="unit">Unit</label>
                <select id="unit" value={unit} onChange={(e) => setUnit(e.target.value)}>
                    <option value="lbs">lbs</option>
                    <option value="kgs">kgs</option>
                </select>
            </div>
            <div className="form-row">
                <label htmlFor="date">Date</label>
                <input id="date" type="text" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="form-row button-row">
                <button onClick={addExercise}>Add Exercise</button>
            </div>
        </div>
    )
    
}

export default AddExercisePage;