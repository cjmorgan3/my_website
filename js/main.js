// //initialize function called when the script loads
// function initialize(){
    // cities();
    // addColumns(cityPop);
    // addEvents(cityPop);
// };

// var cityPop;

// //function to create a table with cities and their populations
// function cities(){
//     //define two arrays for cities and population
//     cityPop = [
//         { 
//             city: 'Sauk City',
//             population: 3410
//         },
//         {
//             city: 'Mazomanie',
//             population: 1652
//         },
//         {
//             city: 'Arena',
//             population: 834
//         },
//         {
//             city: 'Spring Green',
//             population: 1628
//         }
//     ];

//     //append the table element to the div
//     $("#mydiv").append("<table>");

//     //append a header row to the table
//     $("table").append("<tr>");

//     //add the "City" and "Population" columns to the header row
//     $("tr").append("<th>City</th><th>Population</th>");

//     //loop to add a new row for each city
//     for (var i = 0; i < cityPop.length; i++){
//         //assign longer html strings to a variable
//         var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
//         //add the row's html string to the table
//         $("table").append(rowHtml);
//     };
// };
// //Added at Example 3.5 line 44...
//     //get the div id
//     var theid = $('#mydiv').attr('id');


//     //add the class 'foo' to the div
//     $('#mydiv').attr('class', 'foo');

//     //Check your work with the Inspector!
// //Added below Example 3.6...
//     //change the text color
//     $('#mydiv').css('color', 'blue');

//     //change the text size and alignment
//     $('#mydiv').css({
//         'font-size': '1.5em',
//         'text-align': 'left'
//     });

//     //fooled ya! thecolor is rgb(255, 0, 0), the CSS interpreter's translation of the keyword 'red'

// //Added below Example 3.8...
//     //click listener with anonymous handler function
//     $('table').on('click', function(){
//         alert("You've started your journey after the last dam before the Mississippi!");
//     });

//     //alias method for the click event listener
//     $('table').click(function(){
//         alert("Visit Frank Lloyd Wright's Taliesin studio!");
//     });

//     //named handler function for removable listener
//     function clickme(){
//         alert('Look out for the nude beach in Mazo!');
//     };

//     //add the event listener
//     $('table').on('click', clickme);

//     //remove the event listener
//     $('table').off('click', clickme);

// //adding columns to the cityPop array
// function addColumns(cityPop){
//     console.log("ran addColumns")
//     //for each row in cityPop, perform this function of 'i'
//     $('tr').each(function(i){
//         //if 'i' is equal to 0 (the first row), perform code in {}
//     	if (i == 0){
//             //for the first row, add 'City Size' as a header cell
//     		$(this).append('<th>City Size</th>');
//             console.log("header added")
//     	} //if 'i' does not equal 0, perform code in {}
//         else {
//     		var citySize; //defining our citySize variable
//             //if the population corresponding to each city moving downwards falls 
//             //into the given range, the text in quotes will be assigned to the 
//             //citSize variable
//     		if (cityPop[i-1].population < 1000){
//     			citySize = 'A road and a couple of bars';
//             //console.log(cityPop[i-1].population);
//             } else if (cityPop[i-1].population > 3000){
//                 citySize = 'Small';
//     		} else if (cityPop[i-1].population > 1000){
//     			citySize = 'Dinky';
//     		};
//             //displays the previously assigned description of each city's pop size
//     		$(this).append('<td>' + citySize + '</td>');
//     	};
//     });
// };

// //function to make mouseovers psychedelic
// function addEvents(mydata){
//     //when the table is moused over, perform this function of 'i'
// 	$('mydiv').mouseover(function(i){
// 		//defning variable 'color', setting it equal to the first portion
//         //of the rgb color format
// 		var color = "rgb(";
//         //for i=0 and counting up by 1 up to 3, perform following code
// 		for (var i=0; i<3; i++){
//             //define random, set it equal to a number that is between 0 and 1,
//             //which gets multiplied by 255 and rounded to a whole number, resulting 
//             //in a range from 0-255
// 			var random = Math.round(Math.random() * 255);
//             //adds the output of random to color as a running total
// 			color += random;
//             //add the comma necessary for rgb format when i is less than 2
// 			if (i<2){
// 				color += ",";
// 			//otherwise add the closing parenthesis
// 			} else {
// 				color += ")";
// 		};
//         //sets the css style for the table equal to our newly generated rgb color
// 		$(this).css('color', color);
// 		};
// 	});
//     //defines the function
// 	function clickme(){
//         //spells out the alert message
// 		alert('Hey, you clicked me!');
// 	};

//     //creates the pop-up alert when the table is clicked on
// 	$('mydiv').on('click', clickme);
// };

//initialize function called when the script loads
function initialize(){
    debugAjax();
};

//establish global variable of mydata to be used later
var mydata;
//creating a function to read in the MegaCities file
function jQueryAjax(){

    //shorthand jQuery ajax method taking a URL string and a settings object
    $.ajax("../data/MegaCities.geojson", {
        dataType: "json", //tells ajax the type of data
        success: function(response){ //the callback function
            mydata = response; //sets mydata equal to the info read from our json

            console.log(mydata); //checks to see if mydata was assigned data
        }
    });

    //checks the data outside the function in which it was assigned, thus returning 'undefined'
    console.log(mydata);
};
//defines a function and sets the parameter as the response from our ajax method
function debugCallback(response){
    //appends a stringified version of our MegaCities data to the mydiv portion of our HTML code
    $(mydiv).append('<br>GeoJSON data:<br>' + JSON.stringify(mydata));
};
//defines a function to debug our ajax method
function debugAjax(){
    //the same function as our jQueryAjax method
    $.ajax("../data/MegaCities.geojson", {
        dataType: "json",
        success: function(response){
            //calls on our debugCallback function with mydata as the parameter in order to successfully append the stringified data to our webpage
            debugCallback(mydata);
        }
    });
    //an unnecessary attempt to append our data; comes back as undefined
    //$(mydiv).append('<br>GeoJSON data:<br>' + JSON.stringify(mydata));
};
//another attempt to append our stringified data, but comes back as undefined since mydata is assigned data within a function
$(mydiv).append('GeoJSON data: ' + JSON.stringify(mydata));
//call the jQueryAjax function when the document has loaded
$(document).ready(jQueryAjax);
//call the initialize function when the document has loaded
$(document).ready(initialize);