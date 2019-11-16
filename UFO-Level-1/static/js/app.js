// from data.js
var tableData = data;

// select tbody 
var tbody = d3.select("tbody");

// using Object.entries to get key, value data inside of the table
// and loop through them to add to the table in html
function buildTable(data){ 
    tbody.text("");
    data.forEach(function(sighting){
    var new_tr = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value);	
    });
})};

buildTable(tableData)

//select the web user's input and the filter button
var dateInputText = d3.select("#datetime")
var button = d3.select("filter-btn")

// filter data with date that the user inputs
function clickSelect(){
    //don't refresh the page!
    d3.event.preventDefault();
    //print the value that was input
    console.log(dateInputText.property("value"));
    //create a new table showing only the filterd data
    var new_table = tableData.filter(sighting => sighting.datetime===dateInputText.property("value"))
    //display the new table
    displayData(new_table);
}

// event listener to handle change and click
dateInputText.on("change", clickSelect)

//data.forEach(function(weatherReport) {
    //   console.log(weatherReport);
    // });
    
    // // Step 2:  Use d3 to append one table row `tr` for each weather report object
    // // Don't worry about adding cells or text yet, just try appending the `tr` elements.
    // data.forEach(function(weatherReport) {
    //   console.log(weatherReport);
    //   var row = tbody.append("tr");
    // });
    
    // // Step 3:  Use `Object.entries` to console.log each weather report value
    // data.forEach(function(weatherReport) {
    //   console.log(weatherReport);
    //   var row = tbody.append("tr");
    
    //   Object.entries(weatherReport).forEach(function([key, value]) {
    //     console.log(key, value);
    //   });
    // });
    
    // // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
    // data.forEach(function(weatherReport) {
    //   console.log(weatherReport);
    //   var row = tbody.append("tr");
    
    //   Object.entries(weatherReport).forEach(function([key, value]) {
    //     console.log(key, value);
    //     // Append a cell to the row for each value
    //     // in the weather report object
    //     var cell = row.append("td");
    //   });
    // });
    
    // // Step 5: Use d3 to update each cell's text with
    // // weather report values (weekday, date, high, low)
    // data.forEach(function(weatherReport) {
    //   console.log(weatherReport);
    //   var row = tbody.append("tr");
    //   Object.entries(weatherReport).forEach(function([key, value]) {
    //     console.log(key, value);
    //     // Append a cell to the row for each value
    //     // in the weather report object
    //     var cell = row.append("td");
    //     cell.text(value);
    //   });
    // });
    