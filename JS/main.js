function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const msg = document.getElementById("msg").value;
  if (!name || !email || !msg) {
    alert(
      `Please fill out the following fields: ${!name ? "Name" : ""} ${!email ? "Email" : ""} ${!msg ? "Message" : ""}`
    );
  }
}
