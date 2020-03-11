
// select tbody 
var tbody = d3.select("tbody");

// from data.js
var tableData = data;

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

// Event that Triggers a Function When the Button is Clicked
function handleClick(){
    // Prevents the Page from Refreshing
    d3.event.preventDefault();
    // Select HTML Input Element & Get the Value Property of that Input Element
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    // Check if a Date was Entered & Filter Data Using that Date;
    if(date) {
        // Apply Filter to the Table Data to Only Keep Rows Where datetime Value Matches the Filter Value
        filterData = filterData.filter((row) => row.datetime === date);
    }
    // Build Table with Filtered Data
    buildTable(filterData);
}
// `on` Function to attach an Event to the Handler Function
d3.selectAll("#filter-btn").on("click", handleClick);
// Build Table with data.js 
buildTable(tableData);
  
