function loadAdminData() {
    // check if the user is logged in
    const id = window.localStorage.getItem("id");
    console.log(id)
    if (id) {
    //   var myHeaders = new Headers();
    //   myHeaders.append("Content-Type", "application/json");
    //   var raw = JSON.stringify({
    //     id,
    //   });
  
    //   var requestOptions = {
    //     method: "POST",
    //     headers: myHeaders,
    //     body: raw,
    //   };
  
      fetch(`http://localhost:3000/users/find/${id}`)
        .then((response) => response.json())
        .then((user) => {
            console.log(user)
          if (user.isAdmin) {
            // append admin page to nav
            const nav = document.getElementById("navigation");
            nav.innerHTML += `<li><a href="admin.html">Admin</a></li>`;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  
  loadAdminData();