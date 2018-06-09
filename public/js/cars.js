"use strict";

// this is the base API url
var pageNum = 1;
var baseUrl = "https://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a 
  // div with a class "row"
var html = `<div class="row">`;
var i = 0;

  while(i <= carsJSON.length){
    html+= `< div class="col-md-4 car">`;
    html+='<h2>'+carsJSON[i]["Make"]+'</h2>';
    html+='<p><strong>Model:</strong> '+carsJSON[i]["Model"]+'</p>';
    html+='<p><strong>Year:</strong> '+carsJSON[i]["Year"]+'</p>';
    html+='</div>';
    i++;
  }

  html += '</div>';

  return html;
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then 
  // add the resulting HTML to the div with an id of "cars"
  
  $( "#cars" ).append( $( formatCars(carsJSON) ) );
  
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
pageNum ++;

$.ajax({
        url: baseUrl,
        contentType: 'application/x-www-form-urlencoded',
        dataType: 'jsonp',
        success: function(carsJSON) {
          addCarsToDOM(carsJSON);
        }
      });
}
