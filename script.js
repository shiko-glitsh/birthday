function showMessage() {
  const popup = document.getElementById("popup");
  popup.classList.add("active"); // Show the popup
}

function closeMessage() {
  const popup = document.getElementById("popup");
  popup.classList.remove("active"); // Hide the popup
}