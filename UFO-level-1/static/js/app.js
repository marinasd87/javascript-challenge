// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo data from data.js
console.log(data);



// Use d3 to update each cell's text with
// ufo sighting values (weekday, date, high, low)
 tableData.forEach(function(ufoReport) {
   console.log(ufoReport);
   var row = tbody.append("tr");
   Object.entries(ufoReport).forEach(function([key, value]) {
     console.log(key, value);
     // Append a cell to the row for each value
     // in the ufo sighting object
     var cell = row.append("td");
     cell.text(value);
   });
 });

// Select the button
var button = d3.select("#filter-btn");


// Create event handlers 
button.on("click", runEnter);


// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);


  var filteredData = tableData.filter(ufosighting => ufosighting.datetime === inputValue);

  console.log(filteredData);

  tbody.html("")
  filteredData.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the ufo sighting object
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

