const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

fetch("https://reqres.in/api/users?page=2")
  .then(response => response.json())  // Parse response as JSON
  .then(data => {
    let users = data.data;  // Access 'data' property of the parsed JSON
    console.log(users);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
