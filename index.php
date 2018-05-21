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
// echo("Is known route for ". $route_pieces[1] . "? ". $is_known_route);
inc("_head", ($is_known_route ? array("nav" => $route_pieces[1], "nav_label" => $whitelist[$route_pieces[1]]) : null));

echo("<body>");

if(isset($route_pieces) && is_array($route_pieces) && isset($route_pieces[1]) && is_string($route_pieces[1])){
	inc("_header", ($is_known_route ? array("nav" => $route_pieces[1]) : null));
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
?>
<div id="rsvp_modal" class="reveal-modal" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog">
  <h2 id="modalTitle">Let Us Know You're Coming</h2>
  <!-- <p class="lead">Your couch.  It is mine.</p> -->
  <p>Please enter the invite code included in your mailed invitation as well as your home zipcode to continue.</p>
  <form>
  	<div class="grid-container">
	    <div id="swap" class="grid-x grid-padding-x">
	      <div class="medium-6 cell">
	        <label>Invite Code
	          <input type="text" id="inviteCode" placeholder="Invite code inside your invitation">
	        </label>
	        <label>Zip Code
	          <input type="text" id="zipCode" placeholder="Home Zip">
	        </label>
	      </div>
	    	<!-- <div class="g-recaptcha" data-sitekey="6LcFrjYUAAAAAFcMeaKM2ssD6NaY3Tqa4xU0OF5C"></div> -->
	    </div>
	    <div class="grid-x grid-padding-x">
	    	<input id="lookup" type="submit" class="button" value="Submit">
	    </div>
  	</div>
  </form>
  <!-- <a class="close-reveal-modal" aria-label="Close" data-izimodal-close="" data-izimodal-transitionout="bounceOutDown">&#215;</a> -->
</div>

<?php
echo("<script src='/scripts/index.js?%s' type='text/javascript'></script>");

echo("</body>");
