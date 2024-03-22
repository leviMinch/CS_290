import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);


// Connect to to the database
const db = mongoose.connection;
// The open event is called when the database connection successfully opens
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

/**
 * Define the schema
 */
const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    unit: { type: String, required: true }, //note, only kgs and lbs allowed
    date: { type: String, required: true }, //Format: MM-DD-YY, example: 07-30-21.
});

/**
 * Compile the model from the schema. This must be done after defining the schema.
 */
const Exercise = mongoose.model("Exercises", exerciseSchema);

const createExercise = async (name, reps, weight, unit, date) =>{
    const exercise = new Exercise({name: name, reps: reps, weight: weight, unit: unit, date: date});
    return exercise.save();
}

const findExerciseById = async(_id) =>{
    const query = Exercise.findById(_id);
    return query.exec();
}

const getExercises = async() =>{
    const query = Exercise.find();
    return query.exec();
}

const replaceExercise = async (_id, name, reps, weight, unit, date) => {
    const result = await Exercise.replaceOne({_id: _id}, {name, reps, weight, unit, date});
    // Return both 'acknowledged' to indicate that MongoDB acknowledged the operation
    // and 'modifiedCount' (or 'nModified' depending on MongoDB version) to indicate how many documents were modified
    return {
        acknowledged: result.acknowledged,
        modifiedCount: result.modifiedCount // or result.nModified in older versions of MongoDB
    };
}


const deleteById = async(_id) =>{
    const result = await Exercise.deleteMany({_id})
    return result.deletedCount;
}

export {createExercise, findExerciseById, getExercises, replaceExercise, deleteById};

