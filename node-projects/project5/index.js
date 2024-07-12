// Import the events module
const { EventEmitter } = require("events");

// Create an object of EventEmitter Instance
const myEvent = new EventEmitter();

// Using on function, register the listener
myEvent.on('greet', () => {
    console.log("Hello user, welcome to the tech world");
});

// Execute the emit function passing the suitable event
myEvent.emit('greet');