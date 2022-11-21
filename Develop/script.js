// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
	var globalHour = dayjs().hour()
	

	console.log($('.time-block'))
	// console.log($('#hour-container').children('.time-block')[0].id.slice(-2))


	const updateTime = function(){
		//initialize plugin
		dayjs.extend(window.dayjs_plugin_localizedFormat)
		//list localized time in desired format
		$('#currentDay').replaceWith(dayjs().format('LLLL'))
		
		//check if the hour has changed
		if(dayjs().hour() != globalHour){
			globalHour = dayjs().hour()
			setScheduleColor()
		}
	}

	const resetColors = function(){
		for (i = 0; i < $('.time-block').length; i++){
			if ($('.time-block').eq(i).hasClass('past')){
				$('.time-block').eq(i).removeClass('past')
			}
			if ($('.time-block').eq(i).hasClass('present')){
				$('.time-block').eq(i).removeClass('present')
			}
			if ($('.time-block').eq(i).hasClass('future')){
				$('.time-block').eq(i).removeClass('future')
			}
		}
	}

	const setScheduleColor = function(){
		resetColors()

		if (dayjs().hour() < 9){
			for (i = 0; i < $('.time-block').length; i++){
				$('.time-block')[i].addClass('future')
			}
		}
		
		if (dayjs().hour() == 9){
			$('.time-block').eq(0).addClass('present')
			$('.time-block').eq(1).addClass('future')
			$('.time-block').eq(2).addClass('future')
			$('.time-block').eq(3).addClass('future')
			$('.time-block').eq(4).addClass('future')
			$('.time-block').eq(5).addClass('future')
			$('.time-block').eq(6).addClass('future')
			$('.time-block').eq(7).addClass('future')
			$('.time-block').eq(8).addClass('future')
		}
		if (dayjs().hour() == 10){
			$('.time-block').eq(0).addClass('past')
			$('.time-block').eq(1).addClass('present')
			$('.time-block').eq(2).addClass('future')
			$('.time-block').eq(3).addClass('future')
			$('.time-block').eq(4).addClass('future')
			$('.time-block').eq(5).addClass('future')
			$('.time-block').eq(6).addClass('future')
			$('.time-block').eq(7).addClass('future')
			$('.time-block').eq(8).addClass('future')
		}
		if (dayjs().hour() == 11){
			$('.time-block').eq(0).addClass('past')
			$('.time-block').eq(1).addClass('past')
			$('.time-block').eq(2).addClass('present')
			$('.time-block').eq(3).addClass('future')
			$('.time-block').eq(4).addClass('future')
			$('.time-block').eq(5).addClass('future')
			$('.time-block').eq(6).addClass('future')
			$('.time-block').eq(7).addClass('future')
			$('.time-block').eq(8).addClass('future')
		}
		if (dayjs().hour() == 12){
			$('.time-block').eq(0).addClass('past')
			$('.time-block').eq(1).addClass('past')
			$('.time-block').eq(2).addClass('past')
			$('.time-block').eq(3).addClass('present')
			$('.time-block').eq(4).addClass('future')
			$('.time-block').eq(5).addClass('future')
			$('.time-block').eq(6).addClass('future')
			$('.time-block').eq(7).addClass('future')
			$('.time-block').eq(8).addClass('future')
		}
		if (dayjs().hour() == 13){
			$('.time-block').eq(0).addClass('past')
			$('.time-block').eq(1).addClass('past')
			$('.time-block').eq(2).addClass('past')
			$('.time-block').eq(3).addClass('past')
			$('.time-block').eq(4).addClass('present')
			$('.time-block').eq(5).addClass('future')
			$('.time-block').eq(6).addClass('future')
			$('.time-block').eq(7).addClass('future')
			$('.time-block').eq(8).addClass('future')
		}
		if (dayjs().hour() == 14){
			$('.time-block').eq(0).addClass('past')
			$('.time-block').eq(1).addClass('past')
			$('.time-block').eq(2).addClass('past')
			$('.time-block').eq(3).addClass('past')
			$('.time-block').eq(4).addClass('past')
			$('.time-block').eq(5).addClass('present')
			$('.time-block').eq(6).addClass('future')
			$('.time-block').eq(7).addClass('future')
			$('.time-block').eq(8).addClass('future')
		}
		if (dayjs().hour() == 15){
			$('.time-block').eq(0).addClass('past')
			$('.time-block').eq(1).addClass('past')
			$('.time-block').eq(2).addClass('past')
			$('.time-block').eq(3).addClass('past')
			$('.time-block').eq(4).addClass('past')
			$('.time-block').eq(5).addClass('past')
			$('.time-block').eq(6).addClass('present')
			$('.time-block').eq(7).addClass('future')
			$('.time-block').eq(8).addClass('future')
		}
		if (dayjs().hour() == 16){
			$('.time-block').eq(0).addClass('past')
			$('.time-block').eq(1).addClass('past')
			$('.time-block').eq(2).addClass('past')
			$('.time-block').eq(3).addClass('past')
			$('.time-block').eq(4).addClass('past')
			$('.time-block').eq(5).addClass('past')
			$('.time-block').eq(6).addClass('past')
			$('.time-block').eq(7).addClass('present')
			$('.time-block').eq(8).addClass('future')
		}
		if (dayjs().hour() == 17){
			$('.time-block').eq(0).addClass('past')
			$('.time-block').eq(1).addClass('past')
			$('.time-block').eq(2).addClass('past')
			$('.time-block').eq(3).addClass('past')
			$('.time-block').eq(4).addClass('past')
			$('.time-block').eq(5).addClass('past')
			$('.time-block').eq(6).addClass('past')
			$('.time-block').eq(7).addClass('past')
			$('.time-block').eq(8).addClass('present')
		}
		if (dayjs().hour() > 17){
			for (i = 0; i < $('.time-block').length; i++){
				$('.time-block')[i].addClass('past')
			}
		}
	}


	// TODO: Add a listener for click events on the save button. This code should
	// use the id in the containing time-block as a key to save the user input in
	// local storage. HINT: What does `this` reference in the click listener
	// function? How can DOM traversal be used to get the "hour-x" id of the
	// time-block containing the button that was clicked? How might the id be
	// useful when saving the description in local storage?
	$('.saveBtn').click(function(){

		//call save localStorage function

		console.log($(this).parent()[0].id)
	})

	//
	// TODO: Add code to apply the past, present, or future class to each time
	// block by comparing the id to the current hour. HINTS: How can the id
	// attribute of each time-block be used to conditionally add or remove the
	// past, present, and future classes? How can Day.js be used to get the
	// current hour in 24-hour time?


	//
	// TODO: Add code to get any user input that was saved in localStorage and set
	// the values of the corresponding textarea elements. HINT: How can the id
	// attribute of each time-block be used to do this?
	//
	// TODO: Add code to display the current date in the header of the page.

	updateTime()
	setScheduleColor()

	var pageTimer = setInterval(updateTime, 1000)
});




