import react, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const EditExercisePage = ({exerciseToEdit}) => {
    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [date, setDate] = useState(exerciseToEdit.date);

    const navigate = useNavigate();

    const editExercise = async () => {
        const editedExercise = {name, reps: Number(reps), weight: Number(weight), unit, date};
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
                method: 'PUT',
                body: JSON.stringify(editedExercise),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        if(response.status === 200) {
            alert("Successfully edited the exercise");
        }else{
            alert(`Failed to edit the exercise, status code = ${response.status}`);
        }
        navigate('/');
    };
    return (
        <div className="form-container">
            <h1>Edit Exercise</h1>
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
                <button onClick={editExercise}>Save</button>
            </div>
        </div>
    );
}

export default EditExercisePage;