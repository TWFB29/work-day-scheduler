var time = moment();

var task = $("textarea");

var taskColor = $(".col-8");

 var currentHour;

// 4 local storage

var taskArray;

 

// Display M/D/Y to <p> in header

$("#currentDay").text(`${time.format('MMMM Do YYYY')}`);

 

// check local storage for tasks

if(localStorage.getItem("localSavedTasks"))  {

    taskArray = JSon.parse(localStorage.getItem("localSavedTasks"));

} else {

    timeArray = []

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

    $('.alert-success').removeClass('alert-animation');

 

    if (task[btnIndex].value.trim() != "") {

        taskArray[btnIndex] = {

            time: $(".hour")[btnIndex].textContent.trim(),

            task: task[btnIndex].value

        };

 

        localStorage.setItem("localHourlyTasks", JSON.stringify(taskArray));

        setTimeout(function () {

            $('.alert-success').addClass('alert-animation');

            $('.alert-success').text(`Successfully saved task at ${$(".hour")[btnIndex].textContent.trim()}!`);

        }, 100);

    };

};

function writeCurrentTasks() {

    $.each(taskArray, function (i) {

        if (taskArray[i]) {

            task[i].value = taskArray[i].task;

        };

    });

};

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

writeCurrentTasks();

$("button").click(updateLocalStorage);

// // Declares a 'list' variable that holds the parsed to-do items retrieved from 'localStorage'

// // If there is nothing in 'localStorage', sets the 'list' to an empty array

// var list = JSON.parse(localStorage.getItem('todolist')) || [];

 

// // Renders our to-dos to the page

// function renderTodos(list) {

//     // Empties out the html

//     $('#to-dos').empty();

 

//     // Iterates over the 'list'

//     for (var i = 0; i < list.length; i++) {

//         // Creates a new variable 'toDoItem' that will hold a "<p>" tag

//         // Sets the `list` item's value as text of this <p> element

//         var toDoItem = $('<p>');

//         toDoItem.text(list[i]);