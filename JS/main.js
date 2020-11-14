function validateForm() {
  console.log("Hi")
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var msg = document.getElementById("msg").value;
  console.log(x)
  if (name === "") {
    alert("Please filled out Name, Email and Message");
  
    return;
  }
}

// function validateForm() {
//   var x = document.forms["form-contact"]["email"].value;
//   if (x == "") {
//     alert("Email must be filled out");
//     return false;
//   }
// }
// function validateForm() {
//   var x = document.forms["form-contact"]["msg"].value;
//   if (x == "") {
//     alert("Name must be filled out");
//     return false;
//   }
// }
