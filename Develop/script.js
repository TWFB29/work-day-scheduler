var time = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(time);
var task = $("textarea");
var taskColor= $(".col-8");
var presentTime = moment().hour();
var testing = 12
var taskArray = [];
const textAreas = $("textarea")


console.log(presentTime);

function setColor (){

    //seting the color code
    $("textarea").each(function(colorCode){
        var timeSlots = parseInt($(this).attr("id").split("tsk")[1])

        if (timeSlots < presentTime) {
            $(this).addClass("past");
        }else if (timeSlots === presentTime) {
            $(this).addClass("present")
        }else if (timeSlots > presentTime) {
            $(this).addClass("future")
        }
        // const returnID = colorCode.id;
        // 
        console.log(timeSlots);
    }) 
};

if (localStorage.getItem("storedJobs")) {
    taskArray = JSON.parse(localStorage.getItem("storedJobs"));
} else {
    taskArray = [];
};

function addJobs(){
    $.each(taskArray, function (i) {
        if (taskArray[i]) {
            textAreas[i].value = taskArray[i].task;
        };
    });
};

$("button").click(localStorageSave);

function localStorageSave(){
    let btnIndex = Number($(this).attr('id'));
    taskArray[btnIndex] = {
        time: $(".hour")[btnIndex].textContent.trim(),
        task: textAreas[btnIndex].value
    };
    localStorage.setItem("storedJobs", JSON.stringify(taskArray));
};

const help
// function setColor (){
//     for (i = 0; i <= 8; i++) {
//         const textAreas = $("#tsk" + i);
        
//         if (i < testing){
//             // $(this).addClass("past");
//             // textAreas.css("backgroundColor", "red")
//             console.log("yes")
//         }else if (i === testing){
//             textAreas.css("backgroundColor", "red");
//             // console.log("yes")
//         }else if (i > testing){
//             $(this).addClass("future");
//             // console.log("yes")
//         }
//         console.log(textAreas);
        
//     }
// }

// if (localStorage.getItem("localHourlyTasks")) {
//     taskArray = JSON.parse(localStorage.getItem("localHourlyTasks"));
// } else {
//     taskArray = [];
// };
setColor();
addJobs()