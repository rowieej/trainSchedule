$(document).ready(function() {
  


// Link to Firebase
var trainData = new Firebase("https://chuggatrain.firebaseio.com/");

// Link to Firebase Database for viewer tracking
var connectedData = new Firebase("https://chuggatrain.firebaseio.com/viewers");
var userData = connectedData.push();

//on submit button..set a function to take user input to push up to firebase

$(document).on("click", "#submitMe", function(){
	console.log("test");
//retrieve user input and set to a variable
		var train = $("#train").val().trim();
		var destination = $("#destination").val().trim();
		var time = $("#trainTime").val().trim();
		var frequency = $("#frequency").val().trim();
//push information up to firebase

//create a local object for holding data
		var newTrain = {
			train: train,
			destination: destination,
			time: time,
			frequency: frequency
		}

		trainData.push(newTrain);

			console.log(newTrain.train);
			console.log(newTrain.destination);
//don't refresh the page

		return false;
	});

//create firebase event for adding train to the database into html

trainData.on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());

	//store everything into a variable
		var train = childSnapshot.val().train;
		var destination = childSnapshot.val().destination;
		var time = childSnapshot.val().time;
		var frequency = childSnapshot.val().frequency;

		//make sure it worked
		console.log(train);
		console.log(destination);
		console.log(time);
		console.log(frequency);

		//make sure user "time" input is in military time
		var militaryTime = moment(time, 'h:mm a').format('H:mm');
		console.log(militaryTime);

		//calculate amount of minutes until arrival and arrival time
				//starting at "first train time"

		//changes hours into minutes
		var diffTime = moment().unix(militaryTime, "minutes");
		//figure out how many times the frequency goes into that amount of minutes
		var timeRemainder = diffTime % frequency;
		var minutes = frequency - timeRemainder;

		console.log(diffTime);
		console.log(timeRemainder);
		console.log(minutes);

		//calculate next arrival time
		var nextArrival = moment().add(minutes, "m").format("hh:mm A");
		console.log(nextArrival);

		//add to the table
		$("#tTable > tbody").append("<tr><td>" + train + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + nextArrival + "</td><td>" + minutes + "</td></tr>");

})

});


//set the information with Firebase event

	













