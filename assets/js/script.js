// Display current day
$('#currentDay').text(dayjs().format('dddd, MMMM DD'));

const currentHour = dayjs().format('HH')

const timeblockEl = $('.time-block');
const saveBtnEl = $('.saveBtn');

// Compare the current time with the hour presented in the timeblock
// to determine wether it's in the past, present or future and ads
// the corresponding class name to colourise the timeblocks accordingly.
timeblockEl.each(function () {
    let hourNum = $(this).attr('data-hour');

    if (currentHour === hourNum) {
        $(this).addClass("present");
    } else if (currentHour < hourNum) {
        $(this).addClass("future");
    } else if (currentHour > hourNum) {
        $(this).addClass("past");
    }
})

// Save the content to the local storage
saveBtnEl.on('click', function (e) {
    e.preventDefault();

    let content = $(this).siblings(".description").val();
    let time = $(this).parent().attr("data-hour");
    localStorage.setItem(time, content);
})

// Retrieve data from the local storage
timeblockEl.each(function () {
    $(this).children('.description').val(localStorage.getItem($(this).attr('data-hour')))
})