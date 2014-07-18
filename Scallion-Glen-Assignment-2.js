//alert("JavaScript works!");

// Glen Scallion
// 07/17/2014
// Project 2
// Dragons at Dusk, an in depth look
//Initiation of Quest

//My Variables
var myCastle = "\"Windzer\" Castle";
var Beast = " Dragon";
var Weapon1 = " Iron Clad Bo Staff"; //This weapon doesn't fare well in the rain
var Weapon2 = " Poison Tipped Ironwood Spear "; //This weapon doesn't fare well with Fire
var thebestroute = " The Westward Trail "; //String Variable
var Knights = " 4 "; //Number Variable

//Prompt
var person = prompt("Type what you see in the input field to enter out lair", "Password")
	if (person.toLowerCase() == "Password") {
  alert("Welcome, One moment!");
}
confirm("Validation Complete!");

//Procedure Function
function plus (a,b) {
         var WeaponCount = a+b;
	console.log( WeaponCount + " weapons in Arms cache!" );
}
plus(1,1);

//Boolean Function
function myFunction() {
    var text = "10 Minutes to wait for reasearch.";
    var i = 0;
    while (i < 10) {
        text += "<br>The number is " + i;
        i++;
    }
    console.log( text + " That was fast!" );
}

//Number Function
function myFunction() {
    var text = "Knights 4";
    var i;
    for (i = 0; i < 4; i++) {
        text += "The number is " + i + "<br>";
    }
    console.log( "Great all us " + text + " are present!" );
}

//String Function
console.log( "UGH! We need to this" + Beast + " must be slain... But how?!" );
console.log( "Could you help us decide on how we could carry out a good deed?" );

console.log( "Ok Great! We" + Knights + "men want to use an" + Weapon1 + " to slay the" + Beast + "." + " However, If it rains, the" + Weapon2 + "would be a better choice." );

if( confirm( "Help us! Look there and tell us if there are storm clouds approaching. If so then click Cancel to cancel tonights trip or OK if we're Ok!")) {
	alert( "Great, now we can move foward with everything, OK?" );
	console.log( "Great, now we can move foward with everything." );
	console.log( "Since there are no rain clouds abroad, we shall use the" + thebestroute + "to carry out this need and trek at midnight tonight!" );
	alert( "We all say Yea! Click OK if you say Yea?");
	 }
	else	{
		alert("Cancel tonights attempt?");
		console.log( "We must reschedule our Deed for the good of our people!" );
		alert("We will revisit this in the morning, Ok?");
	}

console.log( "Sooner rather, than later, The skull of that" + Beast + " will sit on my wall at " + myCastle +", and serve a trophy of triumph!" );