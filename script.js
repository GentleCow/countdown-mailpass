// let myDate = new Date(); // current date

// new Date().getTime(); // Javascript gasageb enaze mititebuli dro gadmosatania chven enaze shemdgom

// let myDate1 = new Date("April 15, 2003 11:13:00"); //handmade date


/*

// countdown in console.log

let targetDate = new Date("September 22, 2023 12:00:00").getTime(); // Set your target date and time

function updateCountdown() {
  let currentDate = new Date().getTime(); // Get the current date and time
  let timeDifference = targetDate - currentDate;

  if (timeDifference <= 0) {
    clearInterval(interval); // Stop the countdown when it reaches the target date
    console.log("Countdown expired!");
  } else {
    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    console.log(`Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`);
  }
}

// Update the countdown every second (1000 milliseconds)
let interval = setInterval(updateCountdown, 1000);

*/


function updateCountdown() {
  let CurrentDate = new Date();
  let SoonDate = new Date("December 22, 2023 12:00:00");

  if (CurrentDate < SoonDate) {
    let timeDifference = Math.floor((SoonDate - CurrentDate) / 1000); // Convert to seconds

    let days = Math.floor(timeDifference / 86400); // days
    let hours = Math.floor((timeDifference % 86400) / 3600); // Hours
    let minutes = Math.floor((timeDifference % 3600) / 60); // Minutes
    let seconds = timeDifference % 60; // Seconds

    document.getElementById("days").textContent = `${days} days`;
    document.getElementById("hours").textContent = `${hours} hours`;
    document.getElementById("minutes").textContent = `${minutes} minutes`;
    document.getElementById("seconds").textContent = `${seconds} seconds`;
  } else {
    document.getElementById("days").textContent = "0 days";
    document.getElementById("hours").textContent = "0 hours";
    document.getElementById("minutes").textContent = "0 minutes";
    document.getElementById("seconds").textContent = "0 seconds";
  }
}

// Call the updateCountdown function to start the countdown
updateCountdown();

// Update the countdown every second
setInterval(updateCountdown, 1000);


// tu carieli iqna romelime error red color
// email mtavrdebodes .com da qondes @
// pas unda iyos 6 aso 1 didi aso 1 cifri 1 simbolo

        function onClick() {
            let userEmail = document.getElementById("userEmail").value;
            let userPassword = document.getElementById("userPassword").value;

            let empty ="";
            let email = ["@mail.ru", "gmail.com", "@bk.ru"];

            if (userEmail == empty || userPassword == empty) {
              alert("Please fill empty box");
              return;
            }

            if (userEmail.includes(email[0]) 
             || userEmail.includes(email[1])
             || userEmail.includes(email[2])) {
                alert("Email is correct.");
            } else {
                alert("Email is not correct.");
            };

            if (
              userPassword.length >= 6
              && /[a-z]/.test(userPassword)
              && /[0-9]/.test(userPassword)
              && /[!@#$%^&*()]/.test(userPassword)
             ) {
              alert("Password is correct.");

             } else {
              alert("Your password must be at least 6 characters long, contain one uppercase letter, one number and one symbol.");
            };


          }


          














