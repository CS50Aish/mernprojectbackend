// Simple function creation
function greetUser(username){
    console.log(">>> Hello", username, '\b, How are you?');
}

// Store function reference in a variable
const greetUser1 = function(username){
    console.log(">>> Hello", username, '\b, How are you?');
}

// Declare first class function using arrow operator
const greetUser2 = (username) => {
    console.log(">>> Hello", username, '\b, How are you?');
}

greetUser("John");
greetUser("Sam");
greetUser("Ace");