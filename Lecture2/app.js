var students = {
  name: "",
  type: "student"
};
/*The DOMContentLoaded event is fired when the document has been completely loaded and parsed,
without waiting for stylesheets, images, and subframes to finish loading
(the load event can be used to detect a fully-loaded page).
*/
document.addEventListener('DOMContentLoaded', contentLoaded); //document.addEventListener() method attaches an event handler to the document.

function contentLoaded(event) {
  document.getElementbyId('name').addEventListener("keyup", keyup); //The getElementById() method returns the element that has the ID attribute with the specified value
}

function keyup(event) {
  calculatorNumericOutput();
}
function calculatorNumericOutput() {
  student.name = document.getElementById('name').value;
}

var totalNameValue = 0;
for (var i = 0; i < student.name.length; i++) {
  totalNameValue += student.name.charCodeAt(i);
}

//Insert result into page
var output = "Total Numeric value of person's name is " + totalNameValue;
document.getElementById('output').innerText=output;
