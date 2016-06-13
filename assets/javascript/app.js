$(document).ready(function() {
  


// Link to Firebase
var trainData = new Firebase("https://chuggatrain.firebaseio.com/");

// Link to Firebase Database for viewer tracking
var connectedData = new Firebase("https://chuggatrain.firebaseio.com/viewers");
var userData = connectedData.push();

//on submit..set a function

$(document).on("click", "#submitMe", function(){
	console.log("test");

	train = $("#train").val();
	destination = $("#destination").val();
	time = $("#trainTime").val();
	frequency = $("#frequency").val();

		trainData.push({
		train: train,
		destination: destination,
		time: time,
		frequency: frequency
	});

	


});

});









