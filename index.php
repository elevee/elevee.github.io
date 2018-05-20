<?php
$blah = "about";

function inc($name, $args){
	if(isset($name) && is_string($name) && strlen($name)>0){
		switch ($name) {
			case '_head':
				include(sprintf("%s/views/%s.php", __DIR__, $name));
				break;
			default:
				include(sprintf("%s/views/%s/%s.php", __DIR__, $name, $name));
				break;
		}
		
	}
}

$whitelist = array(
	""					=> "Home",
	"about" 			=> "About",
	"weekend" 			=> "Weekend",
	"travel"			=> "Travel/Directions",
	"accommodations" 	=> "Accommodations",
	"registry"			=> "Registry",
	"paso"				=> "Paso"
);
$route_pieces = explode("/", $_SERVER["REQUEST_URI"]);
$is_known_route = in_array($route_pieces[1], array_keys($whitelist));

inc("_head", ($is_known_route ? array("nav" => $route_pieces[1], "nav_label" => $whitelist[$route_pieces[1]]) : null));

echo("<body>");

if(isset($route_pieces) && is_array($route_pieces) && isset($route_pieces[1]) && is_string($route_pieces[1])){
	inc("_header", ($is_known_route ? array("nav" => $whitelist[$route_pieces[1]]) : null));
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
	}
}
echo("<script src='/scripts/index.js?%s' type='text/javascript'></script>");

echo("</body>");
