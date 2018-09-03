<html>
<head>
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-120214729-1"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'UA-120214729-1');
	</script>

	<title><?php echo(isset($args["whitelist"][$args["nav"]]["label"]) && is_string($args["whitelist"][$args["nav"]]["label"]) ? $args["whitelist"][$args["nav"]]["label"]." - " : ""); ?>Wedding of Danielle Lewin & Eric Levine</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta name="description"/>
    <meta name="author">

	<!-- Preload Fonts in attempt to optimize load speed -->
	<link rel="preload" href="BurguesScript.ttf" as="font">
	<link rel="preload" href="MrsEavesSmallCaps.ttf" as="font">
	<!-- <link rel='stylesheet' type='text/css' href='index.css' /> -->
    <!-- Favicon -->
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">

	<!-- Stylesheets -->
	<link href="https://fonts.googleapis.com/css?family=Pinyon+Script|Cabin|Farsan" rel="stylesheet">
	<link rel='stylesheet' type='text/css' href='/scripts/foundation-6.4.2-complete/css/foundation.css' />
	<link rel='stylesheet' type='text/css' href='/scripts/izimodal/css/iziModal.min.css' />
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
	<script src='/scripts/izimodal/js/iziModal.min.js' type='text/javascript'></script>
	<script src="https://use.fontawesome.com/01ccd90832.js"></script>
	<!-- <script src='https://www.google.com/recaptcha/api.js'></script> -->
</head>