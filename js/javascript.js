menu.onclick = function myfunction() {
	// body...
	var x = document.getElementById('mytopnav');

	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}