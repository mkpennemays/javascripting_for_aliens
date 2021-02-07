// from data.js
var tableData = data;
var tableData2 = data2;

// YOUR CODE HERE!
function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }

function clearFilters() {
  document.getElementById("sightingCountry").value ='';
  document.getElementById("sightingState").value ='';
  document.getElementById("ufoShape").value ='';

    /*clear the table*/
    let tableHeaderRowCount = 1;
    let newtable = document.getElementById('ufo-table');
    let rowCount = newtable.rows.length;
    for ( i = tableHeaderRowCount; i < rowCount; i++) {
        newtable.deleteRow(tableHeaderRowCount);
    }
  generateTable(htmlTable, tableData2);
}

function filterList(){
  let countryFilter = new String(document.getElementById("sightingCountry").value);
  let stateFilter = new String(document.getElementById("sightingState").value);
  let shapeFilter = new String(document.getElementById("ufoShape").value);
  let filterOnState = false;
  let filterOnCountry = false;
  let filterOnShape = false;

    /* clean up the filters and set flags*/
    if (countryFilter != ''){   
      filterOnCountry = true;
      countryFilter.toLowerCase();
    }
    if (stateFilter != ''){   
      filterOnState = true;
      stateFilter.toLowerCase();
    }
    if (shapeFilter != ''){   
      filterOnShape = true;
      shapeFilter.toLowerCase();
    }

  let tempTableData = tableData2; 
  let filteredData = [];  
//filter on country
  if (filterOnCountry){
    console.log("filtering on country");
    filteredData = tempTableData.filter(element => element.country == countryFilter);
    tempTableData = filteredData;
  }  

  if (filterOnState){
    filteredData = tempTableData.filter(element => element.state == stateFilter);
    tempTableData = filteredData;
    } 
  if (filterOnShape){
    filteredData = tempTableData.filter(element => element.shape == shapeFilter);
      }

  /*clear the table*/
  let tableHeaderRowCount = 1;
  let newtable = document.getElementById('ufo-table');
  let rowCount = newtable.rows.length;
  for ( i = tableHeaderRowCount; i < rowCount; i++) {
      newtable.deleteRow(tableHeaderRowCount);
  }
  
  /*reload the table*/
  for (let element of filteredData) {
    let row = newtable.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode((element[key]));
      cell.appendChild(text);
    }
  }
    
}


let htmlTable = document.getElementById('ufo-table');
generateTable(htmlTable, tableData2);
