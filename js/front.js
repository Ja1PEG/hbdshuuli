if ($.cookie("theme_csspath")) {
    $('link#theme-stylesheet').attr("href", $.cookie("theme_csspath"));
}


config = {
    countdown: {
        year: 2023,
        month: 7,
        day: 8,
        hour: 0,
        minute: 0,
        second: 0
    }
}

$(function () {
    countdown();
});

/* countdown */

function countdown() {
    // Countdown

    var date = new Date(config.countdown.year,
	    config.countdown.month - 1,
	    config.countdown.day,
	    config.countdown.hour,
	    config.countdown.minute,
	    config.countdown.second),
	    $countdownNumbers = {
		days: $('#countdown-days'),
		hours: $('#countdown-hours'),
		minutes: $('#countdown-minutes'),
		seconds: $('#countdown-seconds')
	    };

		$('#countdown').countdown(date).on('update.countdown', function (event) {
			var $countdownNumbers = {
				days: $('#countdown-days'),
				hours: $('#countdown-hours'),
				minutes: $('#countdown-minutes'),
				seconds: $('#countdown-seconds')
			};
	
			$countdownNumbers.days.text(event.offset.totalDays);
			$countdownNumbers.hours.text(('0' + event.offset.hours).slice(-2));
			$countdownNumbers.minutes.text(('0' + event.offset.minutes).slice(-2));
			$countdownNumbers.seconds.text(('0' + event.offset.seconds).slice(-2));
	
    });

}