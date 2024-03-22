import 'dotenv/config';
import * as exercises from './exercise_model.mjs';
import express from 'express';

const PORT = process.env.PORT;

const app = express();

app.use(express.json());


function validateExerciseInput({ name, reps, weight, unit, date }) {
    const errors = [];

    // Check if all fields are present
    if (!name || !reps || !weight || !unit || !date) {
        errors.push("All fields (name, reps, weight, unit, date) must be provided.");
    }

    // Check if weight and reps are numbers and above 0
    if (typeof weight !== 'number' || weight <= 0) {
        errors.push("Weight must be a number greater than 0.");
    }

    if (typeof reps !== 'number' || reps <= 0) {
        errors.push("Reps must be a number greater than 0.");
    }

    // Check if date is in the right format (MM-DD-YY)
    const dateRegex = /^(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])-\d\d$/;
    if (!dateRegex.test(date)) {
        errors.push("Date must be in the format MM-DD-YY.");
    }

    // Only allow 'kgs' and 'lbs' as units
    if (!['kgs', 'lbs'].includes(unit)) {
        errors.push("Unit must be 'kgs' or 'lbs'.");
    }

    return errors;
}


/**
 * Create a new exercise with the name, reps, weight, unit, and date provided
 */
app.post('/exercises', (req, res) => {
    const errors = validateExerciseInput(req.body);
    if (errors.length > 0) {
        return res.status(400).json({ Error: "Invalid request" });
    }

    exercises.createExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(exercise => {
            res.status(201).json(exercise);
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Request failed' });
        });
});



/**
 * Retrive the exercise corresponding to the ID provided in the URL.
 */
app.get('/exercises/:_id', (req, res) => {
    const exeId = req.params._id;
    exercises.findExerciseById(exeId)
        .then(exercise => { 
            if (exercise !== null) {
                res.json(exercise);
            } else {
                res.status(404).json({ Error: 'Not found' });
            }         
         })
        .catch(error => {
            res.status(404).json({ Error: 'Not found' });
        });
});

/**
 * Retrieve all exercises. 
 */
app.get('/exercises', (req, res) => {
    exercises.getExercises()
        .then(exercise => { 
            if (exercise !== null) {
                res.json(exercise);
            } else {
                res.status(404).json({ Error: 'Resource not found' });
            }         
         })
        .catch(error => {
            res.status(400).json({ Error: 'Request failed' });
        });
});

/**
 * Update the movie whose id is provided in the path parameter and set
 * its title, year and language to the values provided in the body.
 */
app.put('/exercises/:_id', async (req, res) => {
    const errors = validateExerciseInput(req.body);
    if (errors.length > 0) {
        return res.status(400).json({ Errors: "Invalid request" });
    }

    try {
        const result = await exercises.replaceExercise(req.params._id, req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date);
        
        // Check if the exercise was successfully updated
        if (result.acknowledged && result.modifiedCount > 0) {
            res.json({ _id: req.params._id, ...req.body });
        } else {
            // If no documents were updated (meaning no document with the provided _id was found), send a 404 response
            res.status(404).json({ Error: 'Resource not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(404).json({ Error: 'Request failed' });
    }
});



/**
 * Delete the movie whose id is provided in the query parameters
 */
app.delete('/exercises/:_id', (req, res) => {
    exercises.deleteById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'Resource not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Request failed' });
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});