
var people = []; // this is where var person was
var sumbit = document.getElementById('Sumbit')
sumbit.onclick = event_handler;



function event_handler () { // assuming the object gets populated as part of an event
    people.push({
        Name: document.getElementById('Name'),
        Address: document.getElementById('Name')
    });
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
