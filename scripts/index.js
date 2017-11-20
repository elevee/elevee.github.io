//nav anchor tags content obstruction workaround
var shiftWindow = function() { scrollBy(0, -50) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);

let $airports_table = $("table");

$(".airport_point").on('mouseover', function(e){
	console.log(this);
	let apt = this.dataset.airport;
	console.log(apt);
	$airports_table.find("tr").css("background-color", "inherit");
	let $row = $airports_table.find("tr[data-airport='"+apt+"']");
	console.log("row is ", $row);
	if($row && $row.length > 0){
		console.log("oh we found one");
		$row.css("background-color", "#c3e0f7");
	}
});

$(".airport_point .destination_point").on('click', function(e){
	e.preventDefault();
});