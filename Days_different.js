const firstDate = Date.parse("2000-09-08");
const secondDate = Date.parse("2001-10-19");

function dateDifference(firstDate, secondDate) {
    result = (secondDate - firstDate)
    return Math.floor(result / (1000 * 60 * 60 * 24))
}
dateDifference(firstDate, secondDate)