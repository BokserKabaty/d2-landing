$(function () {
  // magnific popup
  $('#gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  // Stop video play on modal close
  $("#videoModal").on('hidden.bs.modal', function (e) {
    $("#videoModal iframe").attr("src", $("#videoModal iframe").attr("src"));
  });

  $("#videoModal2").on('hidden.bs.modal', function (e) {
    $("#videoModal2 iframe").attr("src", $("#videoModal2 iframe").attr("src"));
  });

  // Setup WOW
	new WOW().init();


  ////////////////// COUNTDOWN TIMER //////////////////

  // Set the date we're counting down to
  let countDownDate = new Date("Dec 8, 2018 2:00:00").getTime();

  // Update the count down every 1 second
  let x = setInterval(() => {

    // Get todays date and time
    let now = new Date().getTime();
    let difference = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.abs(Math.ceil(difference / (1000 * 60 * 60 * 24)));
    const hours = Math.abs(Math.ceil((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minutes = Math.abs(Math.ceil((difference % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = Math.abs(Math.ceil((difference % (1000 * 60)) / 1000));

    if (difference > 0) {
      $("#counter").html(`Pozostało: <span class="mx-1 mx-md-3">${days} dni</span><span class="mr-1 mr-md-3">${hours} godz</span><span class="mr-1 mr-md-3">${minutes} min</span><span>${seconds} sek</span>`);
    } else {
      difference = now - countDownDate;
      $("#counter").html(`Ladder od: <span class="mx-1 mx-md-3">${days} dni</span><span class="mr-1 mr-md-3">${hours} godz</span><span class="mr-1 mr-md-3">${minutes} min</span><span>${seconds} sek</span>`);
    }
    
  }, 1000);
});