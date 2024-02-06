"use strict";

window.onload = function() {
    // Add an event listener to the button A
    document.getElementById('styleA').addEventListener('click', function(event) {
        event.preventDefault();
        console.log("ran A");
        document.getElementById('styleSheet').setAttribute('href', "StyleA.css");
    });

    // Add an event listener to the button B
    document.getElementById('styleB').addEventListener('click', function(event) {
        event.preventDefault();
        console.log("ran B");
        document.getElementById('styleSheet').setAttribute('href', "StyleB.css");
    });
}

