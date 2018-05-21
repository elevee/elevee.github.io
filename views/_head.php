<html>
<head>
	<title><?php echo(isset($args["whitelist"][$args["nav"]]["label"]) && is_string($args["whitelist"][$args["nav"]]["label"]) ? $args["whitelist"][$args["nav"]]["label"]." - " : ""); ?>Wedding of Danielle Lewin & Eric Levine</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta name="description"/>
    <meta name="author">
	<!-- Stylesheets -->
	<link href="https://fonts.googleapis.com/css?family=Pinyon+Script|Cabin|Farsan" rel="stylesheet">
	<link rel='stylesheet' type='text/css' href='/scripts/foundation-6.4.2-complete/css/foundation.css' />
	<link rel='stylesheet' type='text/css' href='/node_modules/izimodal/css/iziModal.min.css' />
	<link rel='stylesheet' type='text/css' href='index.css' />
	<link rel='stylesheet' type='text/css' href='/views/_header/_header.css' />

	<?php //page specific styles
		if(isset($args["nav"]) && is_string($args["nav"])){
			$nav = strlen($args["nav"]) > 0 ? $args["nav"] : "home";
			$stylesheet_path = sprintf("%s/%s/%s.css", __DIR__, $nav, $nav);
			if(file_exists($stylesheet_path)){
				echo(sprintf("<link rel='stylesheet' type='text/css' href='views/%s/%s.css?%s'>", $nav, $nav, time()));
			}
			unset($stylesheet, $nav);
		}
	?>
	
	<!-- Script tags that must be before the body -->
	<script src='/scripts/foundation-6.4.2-complete/js/vendor/jquery.js' type='text/javascript'></script>
	<script src='/node_modules/izimodal/js/iziModal.min.js' type='text/javascript'></script>
	<script src="https://use.fontawesome.com/01ccd90832.js"></script>
	<!-- <script src='https://www.google.com/recaptcha/api.js'></script> -->
</head>