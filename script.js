//todays date and time in header


var currentdate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(currentdate);


$(document).ready(function () {
    
    
    $(".savebtn").on("click", function () {
        console.log(this);
            var input = $(this).siblings(".description").val();
            
            var time = $(this).parent().attr("id");

            localStorage.setItem(time, input);
    })


    function clocktracker() {
        var timenow = moment().hour();
        
//hourly time slots

    $(".time-block").each(function () {

        var timeclock = parseInt($(this).attr("id").split("hour")[1]);
//time of day checker
        if(timeblock < timenow) {
            $(this).removeclass("past");
            $(this).removeclass("present");
            $(this).addclass("future");
        }

        else if (blocktime === timenow){
            $(this).removeclass("future");
            $(this).addclass("past");
            $(this).removeclass("present");
            
          }

          else {
            $(this).removeclass("future");
            $(this).addclass("present");
            $(this).removeclass("past");

          }

          //pull from local storage








        })
    }
        
