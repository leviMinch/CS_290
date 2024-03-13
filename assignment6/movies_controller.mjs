import 'dotenv/config';
import express from 'express';
import asyncHandler from 'express-async-handler';
import * as users from './assign_model.mjs';

const app = express();

const PORT = process.env.PORT;

/*
 * Create a user with the given fields 
 */
app.get("/create", async (req, res) =>{
    //create a user with all the fields
    const user = await users.createUser(req.query.name, req.query.age, 
                                        req.query.email, req.query.phoneNumber);
    res.send(user);
})

/*
 * Return users that satisfy the required filter 
 */
app.get("/retrieve", asyncHandler(async (req, res) => {
    let filter = {}
    //add necessary search queries to the filter
    if(req.query.name !== undefined){
        filter.name = req.query.name;
    }
    if(req.query.age !== undefined){
        filter.age = req.query.age;
    }
    if(req.query.email !== undefined){
        filter.email = req.query.email;
    }
    if(req.query.phoneNumber !== undefined){
        filter.phoneNumber = req.query.phoneNumber;
    }
    if(req.query._id !== undefined){
        filter._id = req.query._id;
    }
    const result = await users.findUser(filter);
    res.send(result);
}))

app.get("/update", asyncHandler(async (req,res) =>{
    const update = {};
    //add necessary updates to update
    if(req.query.name !== undefined){
        update.name = req.query.name;
    }
    if(req.query.age !== undefined){
        update.age = req.query.age;
    }
    if(req.query.email !== undefined){
        update.email = req.query.email;
    }
    if(req.query.phoneNumber !== undefined){
        update.phoneNumber = req.query.phoneNumber;
    }
    const resultVal = await users.updateUser({_id: req.query._id}, update);
    
    if(resultVal !== -1) {
        res.send({updateCount: resultVal});
    }
    else {
        res.send({Error: 'Not Found'});
    }
}))

app.get("/delete", asyncHandler(async (req,res) =>{
    const update = {};
    //add necessary updates to update
    if(req.query.name !== undefined){
        update.name = req.query.name;
    }
    if(req.query.age !== undefined){
        update.age = req.query.age;
    }
    if(req.query.email !== undefined){
        update.email = req.query.email;
    }
    if(req.query.phoneNumber !== undefined){
        update.phoneNumber = req.query.phoneNumber;
    }
    if(req.query._id !== undefined){
        update._id = req.query._id;
    }
    const resultVal = await users.deleteUser(update);
    res.send({deleteCount: resultVal});
}))

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});