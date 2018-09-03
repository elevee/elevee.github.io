<div class='top-bar grid-x' data-sticky data-options="marginTop:0;">
	<div class="top-bar-left large-2 medium-2 cell">
		<a href="/"><div class="logo"><img src="/img/monogram.png" alt="Danielle & Eric Monogram"></div></a>
		<ul class="details">
			<li>9/8/18</li>
			<li>Paso Robles, Ca</li>
		</ul>
	</div>
	<div class="top-bar large-8 medium-8 cell">
		<ul class="nav" data-smooth-scroll>
			<?php 
			foreach ($args["whitelist"] as $route => $value) {
				if(isset($route) && is_string($route) && strlen($route) > 0 && isset($value) && isset($value["header"]) && strlen($value["header"]) > 0){
					echo("<li><a href='/".$route."' ".($route === $args["nav"]?"style='color: #93002A":"").";'>".$value["header"]."</a></li>");
				}
			} 
			?>
		</ul>
	</div>
	<div class="top-bar-right large-2 medium-2 cell">
		<a href="#" class="trigger">
			<div><button class='button' disabled>RSVPs Closed</button></div>
		</a>
	</div>
</div>