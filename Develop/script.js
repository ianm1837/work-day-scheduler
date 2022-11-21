// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
	var globalHour = dayjs().hour()

	//function to run every second, creating ability to display current time and update time field colors
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

	//resets the time field colors
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

	//set color of time fields depending on the time of day
	const setScheduleColor = function(){
		resetColors()

		if (dayjs().hour() < 9){
			for (i = 0; i < $('.time-block').length; i++){
				$('.time-block').eq(i).addClass('future')
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
				$('.time-block').eq(i).addClass('past')
			}
		}
	}

	//listen for button click and save clicked section to localstorage
	$('.saveBtn').on('click', (function(){
		localStorage.setItem($(this).parent()[0].id, $(this).parent().children('.description')[0].value)
	}))

	//load data from local storage if it exists and populate it in the relevant fields
	const loadFromLocalStorage = function(){
		for (i = 0; i < $('.time-block').length; i++){
			if(localStorage.getItem($('.time-block')[i].id)){
				$('.time-block').children('.description').eq(i).text(localStorage.getItem($('.time-block')[i].id))
			}
		}
	}

	updateTime()
	setScheduleColor()
	loadFromLocalStorage()

	setInterval(updateTime, 1000)
});




