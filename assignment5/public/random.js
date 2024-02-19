'use strict'

window.onload = function() {
    function textNodeCreater(user){
        //return a node made form teh user
        let el = document.getElementById('browserPerson');
            //create new nodes
        let linebreak = document.createElement('br');
        let newNode = document.createTextNode(`${user.name}, Phone: ${user.phone}, Email: ${user.email}`)
        //add new nodes
        el.appendChild(newNode);
        el.appendChild(linebreak);
    }    

    document.getElementById('browser').addEventListener('click', async function(event){
        event.preventDefault();
        try {
            //gather data
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            const user = data.results[0];
            //get all the specific info we need
            const simplifiedUser = {
                name: user.name.first + ' ' + user.name.last,
                phone: user.phone,
                email: user.email
            };
            //call function to add node with simplified user
            textNodeCreater(simplifiedUser)
        } 
        catch {
            console.error(error) 
        }
    });

    document.getElementById('express').addEventListener('click', async function(event){
        event.preventDefault();
        try {
            //gather data
            const response = await fetch('/random-person');
            const data = await response.json();
            const user = data.results[0];
            const simplifiedUser = {
                name: user.name.first + ' ' + user.name.last,
                phone: user.phone,
                email: user.email
            };
            //call function to add node with simplified user
            textNodeCreater(simplifiedUser)
        } 
        catch {
            console.error(error) 
        }
    })
}