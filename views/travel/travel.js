$(document).ready(function(){
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
});