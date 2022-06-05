//todays date and time in header
var currentdate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(currentdate);


$(document).ready(function () {
    $(".savebtn").on("click", function () {
        console.log(this);
            var input = $(this).siblings(".description").val();
            
            var time = $(this).parent().attr("id");

            localStorage.setItem(time, input);

}


