function finalCountdown() {
    let currentDate = new Date();
    let usersDate = Date.parse('02 Dec 2007 00:12:00 GMT');
    let timeleft = currentDate - usersDate;
    let years = Math.floor(timeleft / (1000 * 60 * 60 * 24 * 30 * 12));
    let months = Math.floor(timeleft / (1000 * 60 * 60 * 24 * 30));
    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((timeleft / (1000 * 60)) % 60);
    let seconds = Math.floor((timeleft / 1000) % 60);

    return console.log(`Time Left: ${years} : ${months} : ${days} : ${hours} : ${minutes} : ${seconds} `)
 }
finalCountdown()