// Dynamically incl the footer html; 
document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("footer").innerHTML = `
  <p> <span style="cursor:pointer" onclick="openNav()"> - charlene | 2026-10-17 - </span></p>`;
});


// Dynamically load the inclHTML script and navigation HTML
document.addEventListener("DOMContentLoaded", function() {
  // Create the placeholder div for dynamic HTML content
  var div = document.createElement('div');
  div.setAttribute('inclHTML', '/navigation/navigation.html');
  document.body.appendChild(div);

  // Load the inclHTML.js script dynamically
  var inclHTMLScript = document.createElement('script');
  inclHTMLScript.src = 'inclHTML.js';
  document.body.appendChild(inclHTMLScript);

  // Once the inclHTML.js script is loaded, execute the inclHTML() function
  inclHTMLScript.onload = function() {
    inclHTML(); // This will load the HTML content into the div

    // Load navigation.js after the HTML content is included
    var navScript = document.createElement('script');
    navScript.src = '/navigation/navigation.js';
    document.body.appendChild(navScript);
  };
});