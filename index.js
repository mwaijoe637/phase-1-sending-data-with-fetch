// Add your code here
function submitData(name, email) {
    const formData = {
      name: name,
      email: email
    };
  
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    };
  
    return fetch('http://localhost:3000/users', config)
      .then(response => response.json())
      .then(data => {
        const id = data.id;
        document.body.innerHTML += id;
      })
      .catch(error => {
        document.body.innerHTML += error.message;
      });
  }
  