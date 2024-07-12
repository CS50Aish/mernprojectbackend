const obj = {
    "name": "Fionna",
    "age": 32,
    "email": "fionna@gmail.com",
    "phone": "91-9090090909",
    "website": "https://example.com",
    "active": false,
    "hobbies": ["Playing", "Cooking"],
    "address": {
        "street":"ABC",
        "city":"Ludhiana",
        "state":"Punjab",
        "country":"India"
    }
};

console.log(">>> Object before update: " + obj);
console.log(obj);
console.log(">>> Getting Property Name Value: ", obj['name']);

// Adding new property i.e. dob
obj['dob'] = "12-09-1990";

// Adding new property i.e. zipcode in child address object
obj['address']['zipcode'] = "123456";

// Update the name and email in main object
obj['name'] = "John";
obj['email'] = "john@gmail.com";
console.log(">>> Object after update: " + obj);
