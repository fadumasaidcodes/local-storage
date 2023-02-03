$(document).ready(function() {
    // Check if local storage has saved text
    if (localStorage.getItem("savedText")) {
      $("#savedText").text(localStorage.getItem("savedText"));
    }
  
    // Save text to local storage on button click
    $("#saveBtn").click(function() {
      localStorage.setItem("savedText", $("#inputText").val());
      $("#savedText").text(localStorage.getItem("savedText"));
    });
  });
  