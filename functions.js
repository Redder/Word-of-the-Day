//Function to return date in the following format
// if the date is Jan 1 2017 2pm then the function should output 1/1/17-2:00:00
module.exports.getServerTime = function() {
	var dt = new Date(); // Date time = new date
	var temp_h = dt.getHours(); // the current hour gets stored in temp since we don't know if its after 12
	if (dt.getHours() <= 12) {	// If time is before 12 AM we are good
		var dh = temp_h;

	} else {	// Else convert to 12 hour time
		var dh = temp_h - 12;
	};
	var formattedDate = dt.getMonth(); + '/' + dt.getDate(); + '/' + dt.getYear();	//Format the Date
	var formattedTime = dh + ":" + dt.getMinutes(); ':' + dt.getSeconds();	//Format the Time
	return formattedDate + "-" + formattedTime	// Return it
}

module.exports.getWord = function (_db, _wordId) {
	_db.wordOfTheDay.find({ "_id": _wordId }, function(err, data) { 
		console.log(data);
		return data
	});
}