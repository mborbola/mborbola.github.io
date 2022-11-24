var MIN_NUMBER_OF_DAYS_BETWEEN_VISITS = 56;

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function generateNextDateText(date) {
    var dateString = `${date.getFullYear()}. ${date.getMonth()+1}. ${date.getDate()}.`;
    return `Kovetkezo veradas ekkor lehet: ${dateString}`;
}

function onInputDateChange() {
    var nextDateElement = document.querySelector('#nextDate');
    var previousDateElement = document.querySelector('#previousDate');

    var nextDate = new Date(previousDateElement.value);
    nextDate.setDate(nextDate.getDate()+MIN_NUMBER_OF_DAYS_BETWEEN_VISITS);

    nextDateElement.innerHTML = generateNextDateText(nextDate);
}
window.onload = function(){
    var previousDateElement = document.querySelector('#previousDate');
    previousDateElement.addEventListener("change", onInputDateChange, false);
    previousDateElement.valueAsDate = new Date();
    onInputDateChange();
};
