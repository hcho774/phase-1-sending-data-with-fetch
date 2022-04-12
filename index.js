// Add your code here
// Add your code her

const formData = {
    dogName: "Byron",
    dogBreed: "Poodle", 
};

const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };
  
fetch("http://localhost:3000/dogs", configurationObject)

  .then(function(response) { // response as an argument, response object representing what the destination server sent back
      return response.json();
  })
  .then(function (object) {
      console.log(object);
  })
  //.catch(function (error) {
  //    alert("bad things, Ragnarok!")
 //     console.log(error.message)
 // })

 
function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({name, email}),
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const body = document.querySelector("body");
        const h1 = document.createElement("h1");
        h1.textContent = data.id;
        body.appendChild(h1);
    })
    .catch(function(error) {
        const body = document.querySelector("body");
        const h2 = document.createElement("h2");
        h2.textContent = error.message;
        body.appendChild(h2);
    });
}

