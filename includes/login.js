document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  // eenvoudige check
  if (usernamme ==="admin" && password === "SoloCup2025") {
    sessionStorage.setItem("isAdmin", "true");
    window.location.href = "/solo-cup/admin.html";
  } else {
    document.getElementById("login-error").style.display = "block";
  }
});
