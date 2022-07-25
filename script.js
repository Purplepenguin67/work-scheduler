//todays date and time in header
const moment = require("moment");
console.log(moment());
var currentdate = moment().format('dddd, MMM Do YYYY');

var today = new Date();
var dd = today.getDate();
var mm= today.getMonth()+1;
var yyyy= today.getfulltear();
console.log(mm);

var currentDay = moment().format("dddd LL");
$("#currentDay").append(currentDay);

var currentTime = moment().format("LT");
$("#currentTime").append(currentTime);

if(dd < 10 ){
        dd = '0' + dd;
}
 if(mm < 10 ){
    mm = '0' + mm;
 }

 today = dd + '/' + mm + '/' + yyyy;
 console.log(today);
 document.getElementById("time").innerhtml = "today is"+ today



    $(".savebtn").on("click", function () {
        console.log(this);
            var input = $(this).siblings(".description").val();
            
            var time = $(this).parent().attr("id");

            localStorage.setItem(time, input);
    })


//pull from local storage
$("#hour1 .description").val(localStorage.getItem("hour1"));
$("#hour2 .description").val(localStorage.getItem("hour2"));
$("#hour3 .description").val(localStorage.getItem("hour3"));
$("#hour4 .description").val(localStorage.getItem("hour4"));
$("#hour5 .description").val(localStorage.getItem("hour5"));
$("#hour6 .description").val(localStorage.getItem("hour6"));
$("#hour7 .description").val(localStorage.getItem("hour7"));
$("#hour8 .description").val(localStorage.getItem("hour8"));

clocktracker();


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
        })
        }

          

    
    
        
