//alert("JavaScript works!");

// Glen Scallion
// 07/10/2014
// Project 1
// Dragons at Dusk

//My Variables
var myCastle = "\"Windzer\" Castle";
var Beast = " Dragon";
var Weapon1 = " Iron Clad Bo Staff"; //This weapon doesn't fare well in the rain
var Weapon2 = " Poison Tipped Ironwood Spear "; //This weapon doesn't fare well with Fire
var thebestroute = " The Westward Trail ";
var Knights = " 4 ";

//Initiation of Quest

var person = prompt("Jezzin", "Harry Potter");

if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
}



//My Output
console.log( "UGH! We need to this" + Beast + " must be slain... But how?!" );

alert( "Could you help us decide on how we could carry out a good deed?" );

console.log( "Ok Great! We" + Knights + "men want to use an" + Weapon1 + " to slay the" + Beast + "." + " However, If it rains, the" + Weapon2 + "would be a better choice." );

if( confirm( "Help us! Look there and tell us if there are storm clouds approaching. If so then click Cancel to cancel tonights trip or OK if we're Ok!")) {
	alert( "Great, now we can move foward with everything, OK?" );
	console.log( "Since there are no rain clouds abroad, we shall use the" + thebestroute + "to carry out this need and trek at midnight tonight!" );
	alert( "We all say Yea! Click OK if you say Yea?");
	 }
	else	{
		alert("Cancel tonights attempt?");
		console.log( "We must reschedule our Deed for the good of our people!" );
		alert("We will revisit this in the morning, Ok?");
	}

console.log( "Sooner rather, than later, The skull of that" + Beast + " will sit on my wall at " + myCastle +", and serve a trophy of triumph!" );