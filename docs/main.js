$(function () {
  // magnific popup
  $('#gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  // 
  ////// Count down timer
  //

  // Set the date we're counting down to
  let countDownDate = new Date("Dec 8, 2018 2:00:00").getTime();

  // Update the count down every 1 second
  let x = setInterval(() => {

    // Get todays date and time
    let now = new Date().getTime();

    // Find the difference between now and the count down date
    let difference = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    $("#counter").html(`Pozostało: <span class="mx-1 mx-md-3">${days} dni</span><span class="mr-1 mr-md-3">${hours} godz</span><span class="mr-1 mr-md-3">${minutes} min</span><span>${seconds} sek</span>`);



    // If the count down is finished, write some text 
    if (difference < 0) {
      clearInterval(x);
      $("#counter").html("LADDER LIVE");
    }
  }, 1000);
});