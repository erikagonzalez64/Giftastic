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