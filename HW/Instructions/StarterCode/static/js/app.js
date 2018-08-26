// from data.js
var tableData = data;

// // YOUR CODE HERE!

var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#filter-btn");

//Event listener to the filter button
$searchBtn.addEventListener("click", handleSearchButtonClick);


// renderTable renders tableData
function renderTable() {
  $tbody.innerHTML = "";
  console.log("render is happening")

  for (var i = 0; i < tableData.length; i++) {
    var sighting = tableData[i];
    var fields = Object.keys(sighting);
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
        var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = sighting[field];
    }
  }
}

function handleSearchButtonClick(e) {
  e.preventDefault()
  var filterDate = $dateInput.value.trim();
    if (filterDate.length != 0){
        table_Data = tableData;
        tableData = null;
        tableData = table_Data.filter(function(sighting) {
        var sightingDate = sighting.datetime;
        return sightingDate === filterDate;//tableData;
          
         });
  }
    else {
          
      tableData = data;
    
  }
  renderTable();
}
renderTable();