let hour = document.querySelectorAll(".hour");
let textEl = $("#eventsText");

console.log(textEl);
//This uses moment() to setup the current day, month, and year
let currentDay = moment().format("dddd MMMM Do, YYYY");
$("#currentDay").text(currentDay);

//Setup an array for the hours of a work day
hoursIndex = 0;
let hoursArray = [
    {
        9: "9AM",
        10: "10AM",
        11: "11AM",
        12: "12PM", 
        13: "1PM",
        14: "2PM",
        15: "3PM",
        16: "4PM", 
        17: "5PM",
    }
]

//This will cycle through the hours array
function updateHours() {
    hour.innerHTML = hoursArray[hoursIndex][9]
    hour.innerHTML = hoursArray[hoursIndex][10]
    hour.innerHTML = hoursArray[hoursIndex][11]
    hour.innerHTML = hoursArray[hoursIndex][12]
    hour.innerHTML = hoursArray[hoursIndex][13]
    hour.innerHTML = hoursArray[hoursIndex][14]
    hour.innerHTML = hoursArray[hoursIndex][15]
    hour.innerHTML = hoursArray[hoursIndex][16]
    hour.innerHTML = hoursArray[hoursIndex][17]
  }
  
  updateHours();

//Save button
let saveButton = document.querySelectorAll(".saveBtn"); 

//Setup the click event to save the text to localStorage
  $(document).ready(function () {
      $(".saveBtn").click(function () {
        var parentEl = $(this).parent()
        var hour = parentEl.attr("id");
        var textareaEl = parentEl.find(".form-control")
        var event = textareaEl.val()
        console.log(hour); 
        console.log(event);
        
        localStorage.setItem(hour, event);
      });

      $("#9 .form-control").val(localStorage.getItem("9"));
      $("#10 .form-control").val(localStorage.getItem("10"));
      $("#11 .form-control").val(localStorage.getItem("11"));
      $("#12 .form-control").val(localStorage.getItem("12"));
      $("#13 .form-control").val(localStorage.getItem("13"));
      $("#14 .form-control").val(localStorage.getItem("14"));
      $("#15 .form-control").val(localStorage.getItem("15"));
      $("#16 .form-control").val(localStorage.getItem("16"));
      $("#17 .form-control").val(localStorage.getItem("17"));

      //This function is responsible for adding the colors to the event section for past, present, and future events.
      var currentHour = moment().hour();
      $( ".row" ).each(function() {
        var hour = parseInt($(this).attr("id"));
        var eventEl = $(this).children().find(".form-control");
        if (hour < currentHour) {
            //past
            eventEl.addClass("past");
        } else if (hour === currentHour) {
            //present
            eventEl.removeClass("past");
            eventEl.addClass("present");
        } else {
            //future
            eventEl.addClass("future");
            eventEl.removeClass("past");
            eventEl.removeClass("present");
        }
      })
  }); 
  

  
// $(document).ready(function () {
//     $(".saveBtn").click(function () {
//       let hour = $(this).attr(".hour");
//       console.log(hour);
//       let eventEl = $(this).attr(".eventsText1").val();
      
//       const savedTime = JSON.stringify({  hour, eventEl })

//       localStorage.setItem('newSavedTime', savedTime); 
//     });
// });

//Create a loop to pick up the information from the text.
// for (let i = 0; i < eventsText.length; i++) {
    
// }

//Setup jquery localStorage

  