function userLogin() {
    // Add button event listeners
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    fetch("http://localhost:3000/users/all")
    .then((response) =>  result = response.json())
    .then((result) => {
    //  const result = JSON.parse(resultText);
        result.forEach(user => {
            if(user.username === username && user.password === password){  
            window.localStorage.setItem("id", user._id);
            // redirect
            window.location.href = "index.html";
            alert("Login Seccesful!")
          }
        })
        setError("User Not Found ...");
      } 
    )
    .catch((error) => {
      console.error(error);
      setError("Loging in incounterd an Error...");
    });
  }

  function setError(error) {
    const err = document.getElementById("error");
    err.innerHTML = error;
  }

  function signUp(){
   
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    const user ={
      username: username,
      password: password,
    }
    fetch("http://localhost:3000/users/add",{
      method:"POST",
      headers:  {
        'Content-Type': 'application/json',
        withCredentials: true
      },
      body:JSON.stringify(user),
    }
    ).then((response) => response.text())
    .then((data) => {
      const result =  JSON.parse(data);
      console.log('Success:', result);
      alert("Signed Up Seccesfuly")

    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  