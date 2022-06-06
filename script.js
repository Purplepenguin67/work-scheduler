//todays date and time in header


//date
var mydate = new Date();
var year =mydate.getFullYear();
if(year < 1000){
    year +=1900
}
var day = mydate.getDay();
var month = mydate.getMonth();
var daym = mydate.getDate();
var dayarray = new Array("sunday", monday, tuesday, wednesday, thursday, friday, saturday);
var montharray = new Array(january, febuary, march, april, may, june, july, august, september, october, november, decemeber)
    
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
            })
            }

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

        })
    
        
