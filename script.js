function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
  
  // Listen to checkbox "change" event (not click)
  document.getElementById("darkToggle").addEventListener("change", myFunction);
  