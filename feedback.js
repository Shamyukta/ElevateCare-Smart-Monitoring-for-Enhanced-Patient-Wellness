window.alert("Hii User :)");
var db = firebase.firestore();

function storeData()
{
	var emailText = document.getElementById("email_field").value;
	var inputText = document.getElementById("text_field").value;
	var nameText = document.getElementById("name_field").value;
	var ratingText = document.getElementById("rating_field").value;
	
	
	// Add a new document in collection "cities"
	db.collection("Give Suggestion").doc().set({
		name:nameText,
		email: emailText,
		feedback: inputText,
		rating: ratingText
		
	})
	.then(() => {
		console.log("Document successfully written!");
	})
	.catch((error) => {
		console.error("Error writing document: ", error);
	});
}
