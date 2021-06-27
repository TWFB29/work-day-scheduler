var time = moment();

var task = $("textarea");

var taskColor = $(".col-8");

 var currentHour;

// 4 local storage

var taskArray;

 

// Display M/D/Y to <p> in header

$("#currentDay").text(`${time.format('MMMM Do YYYY')}`);

 

// check local storage for tasks

if (localStorage.getItem("localHourlyTasks")) {
    taskArray = JSON.parse(localStorage.getItem("localHourlyTasks"));
} else {
    taskArray = [];
};
 

// function to link time and task rows for color coding using classes

function colorCodedRows() {

presentHour = time.hour();

taskColor.removeClass('past present future');

$.each(taskColor, function (hourRow) {

    if (hourRow < (time.hour())) {

        $(this).addClass('past');

    } else if (hourRow === (time.hour())) {

        $(this).addClass('present');

    } else {

        $(this).addClass('future');

    }

});

presentHour = time.hour();

};

function updateCurrentScheduleTime() {

    taskColor.removeClass('past present future');

    $.each(taskColor, function(hourRow) {

        if (hourRow < (time.hour() - 9)) {

            $(this).addClass('past');

        } else if (hourRow === (time.hour() - 9)) {

            $(this).addClass('present');

        } else {

            $(this).addClass('future');

        }

    });

    currentHour = time.hour();

};

// interval linking present time and row colors

setInterval(function () {

    time = moment();

}

)

function updateLocalStorage() {

    event.preventDefault();

    let btnIndex = Number($(this).attr('id'));
    
    
    var txt = document.getElementById('tsk' + btnIndex).value
    var tg
    if (btnIndex < 9 || btnIndex === 12) {
       tg = "PM";
    } else {
        tg = "AM";
    };
    if (txt != "") {
        
       const tx = {
           task: txt, 
           
           time: btnIndex + tg,
        }


        localStorage.setItem("localHourlyTasks", JSON.stringify(tx));
        
    };
   

};


//function writeCurrentTasks() {

  // var allTasks = [""];
    //allTasks += tx;

//};

setInterval(function () {

    time = moment();

    if (currentHour < time.hour()) {

        updateCurrentScheduleTime();

    } else if (currentHour > time.hour()) {

        updateCurrentScheduleTime();

        $("#currentDay").text(`${time.format('dddd, MMMM Do')}`);

    }

}, 1000);

updateCurrentScheduleTime();



$("button").click(updateLocalStorage);

