//added my array of some animals to start off with
var topics = [
	"turkey",
	"seal",
	"flamingo",
];
// added my forloop to add new button each time someone searches an animal!
for(var i = 0; i < topics.length; i++) {
	var button = $("<button>").text(topics[i]);
	button.attr("data-animal", topics[i]);
	button.addClass("animal-button");
    $("#button-group").append(button);
}
//added an if statement. Also added buttons and classes to be able to add new animal each type it is search with new button
$("#add-animal-button").on("click", function(e) {
	e.preventDefault();
	var alreadyExist = false;
	if(topics.indexOf($("#new-animal-input").val()) !== -1) {
		alreadyExist = true;
	}
	if($("#new-animal-input").val() !== "" && alreadyExist === false) {
		var newAnimal = $("#new-animal-input").val().toLowerCase();
		topics.push(newAnimal);
		var button = $("<button>").text(newAnimal);
		button.attr("data-animal", newAnimal);
		button.addClass("animal-button");
		$("#button-group").append(button);
	}
	$("#new-animal-input").val("");
});
// added keys and links to have the gifs pop up to the page
$(document).on("click", ".animal-button", function() {
	var animal = $(this).attr("data-animal");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10&rating=g&pg";
