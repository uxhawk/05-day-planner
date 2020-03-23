var events = [];
var timeIndex;

function init() {
    // Get from localStorage
    // Parsing the JSON string to an object
    var storedEvents = JSON.parse(localStorage.getItem("events"));

    if (storedEvents !== null) {
        events = storedEvents;
    }

    displaySched();
}

function setStorage() {
    localStorage.setItem("events", JSON.stringify(events));
}

//display current date at top of page
var today = moment().format("dddd, MMMM Do YYYY");
$("#today").text(today);

function clearModalInputs() {
    $("#task-name").val("");
    $("#task-desc").val("");
}

//add event listeners to the task column
function tagTaskCol() {
    $(".task-col").click(function(event) {
        timeIndex = parseInt(event.target.getAttribute("time-index"));
        if (event.target.hasAttribute("time-index")) {
            clearModalInputs();
            $('#taskModal').modal('show');
            return timeIndex;
        } else {
            return
        }
    });
}

$("#modal-save-btn").click(function(event) {
    event.preventDefault();
    var taskName = $("#task-name").val();
    var taskDesc = $("#task-desc").val();

    events.push({
        task_name: taskName,
        task_desc: taskDesc,
        time_index: timeIndex
    });

    setStorage();
    $('#taskModal').modal('hide');
    clearModalInputs();
    displaySched();

})

function displaySched() {
    $("#sched-disp").empty();
    var legendRow = `<div class="row w-100 mb-2 d-flex justify-content-center">
        <div class="past key d-inline py-1 px-2">Past</div>
        <div class="present key d-inline py-1 px-2">Present</div>
        <div class="future key d-inline py-1 px-2">Future</div>
        </div>`;


    $("#sched-disp").append(legendRow);

    for (let i = 09; i <= 17; i++) {
        $(`#task-${i}`).empty();
        var curHour = parseInt(moment().format("HH"));
        var newRow = $(`<div class="row">
        <div id="time-${i}" class="col-2 text-center border-right border-bottom light-border py-4 px-2 d-flex align-items-center justify-content-center"><h4>9</h4></div>
        <div id="task-${i}" class="col-10 task-col border-bottom light-border overflow-hidden" time-index="${i}"></div>
        </div>`);

        var newTask = $(`<div id="task${i}" class="alert alert-primary my-2 w-100 align-items-center" role="alert">
            <h5 class="py-0"><span id="task-title-index-${i}">Testing</span></h5>
            <p class="py-0 my-0"><span id="task-desc-index-${i}">Testing2</span></p>
            </div>`);

        newRow.attr("time-index", i);
        $("#sched-disp").append(newRow);

        if (i < 12) {
            $(`#time-${i}`).text(`${i}:00 AM`);
        } else if (i === 12) {
            $(`#time-${i}`).text(`${i}:00 PM`);
        } else if (i > 12) {
            $(`#time-${i}`).text(`${i-12}:00 PM`);
        }


        if (i < curHour) {
            $(`#task-${i}`).addClass("past");
        } else if (i === curHour) {
            $(`#task-${i}`).addClass("present");
        } else if (i > curHour) {
            $(`#task-${i}`).addClass("future");
        }
        tagTaskCol();

        //set style for past/future tasks
        for (let j = 0; j < events.length; j++) {
            if (events[j].time_index === i) {
                $(`#task-${i}`).append(newTask);
                $(`#task-title-index-${i}`).text(events[j].task_name);
                $(`#task-desc-index-${i}`).text(events[j].task_desc);
            }
        }
    }

}

init();