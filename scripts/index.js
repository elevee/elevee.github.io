//nav anchor tags content obstruction workaround
var shiftWindow = function() { scrollBy(0, -50) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);

let $airports_table = $("table");

$(".airport_point").on('mouseover', function(e){
	let apt = this.dataset.airport;
	$airports_table.find("tr").css("background-color", "inherit");
	let $row = $airports_table.find("tr[data-airport='"+apt+"']");
	if($row && $row.length > 0){
		$row.css("background-color", "#c3e0f7");
	}
});

$(".airport_point .destination_point").on('click', function(e){
	e.preventDefault();
});


$("#rsvp_modal").iziModal({
	closeButton: true
});

$(document).on('click', '.trigger', function (event) {
    event.preventDefault();
    $('#rsvp_modal').iziModal('open');
});