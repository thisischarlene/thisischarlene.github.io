function inclHTML() {
  var z, i, elmnt, file;
  /* loop through all HTML elements to find elements with the inclHTML attribute */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /* check if the element has the 'inclHTML' attribute */
    file = elmnt.getAttribute("inclHTML");
    if (file) {
      /* fetch the file and insert its content */
      fetch(file)
        .then(response => {
          if (response.ok) {
            return response.text();
          }
          throw new Error('Page not found');
        })
        .then(data => {
          elmnt.innerHTML = data;
          elmnt.removeAttribute("inclHTML");
          inclHTML(); // call the function again to process other elements
        })
        .catch(error => {
          elmnt.innerHTML = error.message;
        });
      /* exit the function after starting the fetch */
      return;
    }
  }
}
