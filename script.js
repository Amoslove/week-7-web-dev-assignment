function savePreference(key, value) {
  localStorage.setItem(key, value);
}

function getPreference(key) {
  return localStorage.getItem(key) || "No preference saved";
}


savePreference("theme", "dark");
console.log(getPreference("theme")); // Outputs: "dark"


document.getElementById("animateBtn").addEventListener("click", function () {
  this.style.animation = "buttonHover 0.3s forwards";
});