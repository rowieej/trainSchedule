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
		diffTime = moment(time, 'h:mm a').format('H:mm');
		console.log(diffTime);

		//take the user "time" input and add the user "fequency" in minutes to get time of next arriving train
		var  = moment
})

});


//set the information with Firebase event

	













