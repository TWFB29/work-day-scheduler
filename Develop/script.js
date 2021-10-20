var time = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(time);
var task = $("textarea");
var taskColor= $(".col-8");
var currentHour;
var taskArray = [];

function setColor (){
    for (i = 0; i <= 8; i++) {
        const timeSlot = "tsk" + i;
        console.log(timeSlot);
    }
}
// if (localStorage.getItem("localHourlyTasks")) {
//     taskArray = JSON.parse(localStorage.getItem("localHourlyTasks"));
// } else {
//     taskArray = [];
// };
