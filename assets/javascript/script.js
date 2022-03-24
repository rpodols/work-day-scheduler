var DateTime = luxon.DateTime;
var localTime = DateTime.local();
var currentTime = localTime.toLocaleString(DateTime.DATETIME_MED);
var currentHour = localTime.toLocaleString(DateTime.TIME_24_SIMPLE);
var hourNumber = DateTime.local().hour;
var hourCompare = parseInt(hourNumber);
console.log(hourNumber);
console.log(currentHour);

var currentTimeEl = document.querySelector("#currentDay");
currentTimeEl.textContent = currentTime;

//logic for colors on calendar
// 8AM
if (hourNumber == 8) {
    $("#8desc").addClass("present");
} else if (hourNumber > 8) {
    $("#8desc").addClass("past");
} else {
    $("#8desc").addClass("future");
};
// 9AM
if (hourNumber == 9) {
    $("#9desc").addClass("present");
} else if (hourNumber > 9) {
    $("#9desc").addClass("past");
} else {
    $("#9desc").addClass("future");
};
// 10AM
if (hourNumber == 10) {
    $("#10desc").addClass("present");
} else if (hourNumber > 10) {
    $("#10desc").addClass("past");
} else {
    $("#10desc").addClass("future");
};
// 11AM
if (hourNumber == 11) {
    $("#11desc").addClass("present");
} else if (hourNumber > 11) {
    $("#11desc").addClass("past");
} else {
    $("#11desc").addClass("future");
};
// 12PM
if (hourNumber == 12) {
    $("#12desc").addClass("present");
} else if (hourNumber > 12) {
    $("#12desc").addClass("past");
} else {
    $("#12desc").addClass("future");
};
// 1PM
if (hourNumber == 13) {
    $("#1desc").addClass("present");
} else if (hourNumber > 13) {
    $("#1desc").addClass("past");
} else {
    $("#1desc").addClass("future");
};
// 2PM
if (hourNumber == 14) {
    $("#2desc").addClass("present");
} else if (hourNumber > 14) {
    $("#2desc").addClass("past");
} else {
    $("#2desc").addClass("future");
};
// 3PM
if (hourNumber == 15) {
    $("#3desc").addClass("present");
} else if (hourNumber > 15) {
    $("#3desc").addClass("past");
} else {
    $("#3desc").addClass("future");
};
// 4PM
if (hourNumber == 16) {
    $("#4desc").addClass("present");
} else if (hourNumber > 16) {
    $("#4desc").addClass("past");
} else {
    $("#4desc").addClass("future");
};
// 5PM
if (hourNumber == 17) {
    $("#5desc").addClass("present");
} else if (hourNumber > 17) {
    $("#5desc").addClass("past");
} else {
    $("#5desc").addClass("future");
};

// each times text areas - save and load
$("#8desc").val(localStorage.getItem("8desc"));
$("#but8").click(function() {
    var hour8Text = $("#8desc").val();
    localStorage.setItem("8desc", hour8Text);
});

$("#9desc").val(localStorage.getItem("9desc"));
$("#but9").click(function() {
    var hour9Text = $("#9desc").val();
    localStorage.setItem("9desc", hour9Text);
});

$("#10desc").val(localStorage.getItem("10desc"));
$("#but10").click(function() {
    var hour10Text = $("#10desc").val();
    localStorage.setItem("10desc", hour10Text);
});

$("#11desc").val(localStorage.getItem("11desc"));
$("#but11").click(function() {
    var hour11Text = $("#11desc").val();
    localStorage.setItem("11desc", hour11Text);
});

$("#12desc").val(localStorage.getItem("12desc"));
$("#but12").click(function() {
    var hour12Text = $("#12desc").val();
    localStorage.setItem("12desc", hour12Text);
});

$("#1desc").val(localStorage.getItem("1desc"));
$("#but1").click(function() {
    var hour1Text = $("#1desc").val();
    localStorage.setItem("1desc", hour1Text);
});

$("#2desc").val(localStorage.getItem("2desc"));
$("#but2").click(function() {
    var hour2Text = $("#2desc").val();
    localStorage.setItem("2desc", hour2Text);
});

$("#3desc").val(localStorage.getItem("3desc"));
$("#but3").click(function() {
    var hour3Text = $("#3desc").val();
    localStorage.setItem("3desc", hour3Text);
});

$("#4desc").val(localStorage.getItem("4desc"));
$("#but4").click(function() {
    var hour4Text = $("#4desc").val();
    localStorage.setItem("4desc", hour4Text);
});

$("#5desc").val(localStorage.getItem("5desc"));
$("#but5").click(function() {
    var hour5Text = $("#5desc").val();
    localStorage.setItem("5desc", hour5Text);
});



