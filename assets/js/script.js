const currentDay = dayjs();
$('#currentDay').text(currentDay.format('dddd, MMMM DD'));
const currentHour = dayjs().format('HH')

const timeblockEl = $('.time-block');
const hourEl = $('.hour');
const descriptionEL = $('.description');
const saveBtnEl = $('.saveBtn');

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