document.getElementById("orderForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Retrieve form values
  var product = document.getElementById("product").value;
  var quantity = document.getElementById("quantity").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  // Validate form inputs
  if (product === "" || quantity === "" || name === "" || email === "") {
    alert("Please fill in all fields.");
    return;
  }

  // Display success message
  var message = "Thank you, " + name + "! Your order for " + quantity + " " + product + "(s) has been placed.";
  document.getElementById("orderForm").reset();
  document.getElementById("orderForm").insertAdjacentHTML("beforebegin", "<p class='order-status'>" + message + "</p>");
});

