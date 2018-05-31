<?php
function inc($name, $args){
	if(isset($name) && is_string($name) && strlen($name)>0){
		switch ($name) {
			case '_head':
			case '_rsvp_modal':
			case '404':
				include(sprintf("%s/views/%s.php", __DIR__, $name));
				break;
			default:
				include(sprintf("%s/views/%s/%s.php", __DIR__, $name, $name));
				break;
		}
	}
}

$whitelist = array(
	""					=> array(
		"label" => "Home",
	),
	"about" 			=> array(
		"header" => "How We Met",
		"label"  => "About Us",
	),
	"weekend" 			=> array(
		"header" => "The Weekend",
		"label"  => "Weekend Agenda",
	),
	"travel"			=> array(
		"header" => "Getting Here",
		"label"  => "Travel/Directions",
	),
	"accommodations" 	=> array(
		"header" => "Staying Here",
		"label"  => "Accommodations",
	),
	"registry"			=> array(
		"header" => "Registry",
		"label"  => "Registry",
	),
	"paso"				=> array(
		"header" => "Paso",
		"label"  => "Paso",
	),
	"faq"				=> array(
		"header" => "FAQ",
		"label"  => "FAQ",
	),
);
$route_pieces = explode("/", $_SERVER["REQUEST_URI"]);
$is_known_route = in_array($route_pieces[1], array_keys($whitelist));
// echo("Is known route for ". $route_pieces[1] . "? ". $is_known_route);
inc("_head", ($is_known_route ? array("nav" => $route_pieces[1], "whitelist" => $whitelist) : null));

echo("<body>");

if(isset($route_pieces) && is_array($route_pieces) && isset($route_pieces[1]) && is_string($route_pieces[1])){
	inc("_header", array("nav" => $route_pieces[1], "whitelist" => $whitelist));
	if($is_known_route){
		$route_name = trim($route_pieces[1]) === "" ? "home" : trim($route_pieces[1]);
		$path = sprintf("%s/views/%s/%s.php", __DIR__, $route_name, $route_name);
		// echo("Hitting this route: ".$path);
		if(file_exists($path)){
			include($path);
		}

		$js_path = sprintf("%s/views/%s/%s.js", __DIR__, $route_name, $route_name);
		if(file_exists($js_path)){
			echo(sprintf("<script src='/views/%s/%s.js?%s' type='text/javascript'></script>", $route_name, $route_name, time()));
		}
	} else {
		inc("404", array("nav" => $route_pieces[1], "whitelist" => $whitelist));
	}
}
inc("_rsvp_modal", null);
echo("<script src='scripts/foundation-6.4.2-complete/js/vendor/what-input.js'></script>");
echo("<script src='scripts/foundation-6.4.2-complete/js/vendor/foundation.js'></script>");
echo(sprintf("<script src='/scripts/index.js?%s' type='text/javascript'></script>", time()));
echo("<script>");
	echo("$(document).foundation();");
echo("</script>");
echo("</body>");
