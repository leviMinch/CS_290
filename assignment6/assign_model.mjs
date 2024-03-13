import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);

const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});


/*
Example:
[  
  {  
   "phoneNumber": 8114482,
   "_id": "60e435e0e2d67f620c534a84",  
   "name": "Cher Gray",  
   "age": 27,
   "email": "cher@example.com",  
   "__v": 0  
  } 
]
*/
const userSchema = mongoose.Schema({
	phoneNumber: { type: Number, required: false },
	name: { type: String, required: true},
    age: { type: Number, required: true},
    email: { type: String, required: true}
});

const User = mongoose.model("Users", userSchema);

const createUser = async (name, age, email, phoneNumber) => {
    const user = new User({name: name, age: age, email: email, phoneNumber: phoneNumber})
    return user.save()
}

const findUser = async(filter) =>{
    const query = User.find(filter);
    return query.exec();
}

const updateUser = async(filter, update) =>{
    try{
        const result = await User.updateOne(filter, update);
        return result.modifiedCount;
    }
    catch {
        return -1;
    }
}

const deleteUser = async(filter) =>{
    try{
        const result = await User.deleteMany(filter);
        return result.deletedCount;
    }
    catch {
        return 0;
    }
}

export {createUser, findUser, updateUser, deleteUser};
