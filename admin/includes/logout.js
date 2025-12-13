document.getElementById("logout-button").addEventListener("click", function() {
  // 1. verwijder de admin-loginstatus
  sessionStorage.removeItem("isAdmin");
  
  // 2. redirect terug naar loginpagina
  window.location.href = "/solo-cup/login.html";
});
