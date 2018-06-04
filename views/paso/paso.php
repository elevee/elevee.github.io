<?php
	$recs = array(
		"restaurants" => array(
			array(
				"name" => "Fish Gaucho",
				"description" => "Mexican: This place is delicious but on the pricier side. Great for a proper dinner.",
			),
			array(
				"name" => "Basil Thai",
				"description" => "Our favorite Thai spot in Paso and one of Danielle's favorite ever Pad Thai and Red Curry.",
			),
			array(
				"name" => "Firestone-Walker Brewery",
				"description" => "This is the Firestone motherland, so if you like beer, The tap room is a full-fledged restaurant, so substantial pub food here.",
			),
			array(
				"name" => "Big Bubba's Bad BBQ",
				"description" => "Kitchy BBQ place but their food is solid.",
			),
			array(
				"name" => "Joe's Place",
				"description" => "Walkable from hotel. Popular mom-&-pop breakfast joint serving hearty, old-school American eats.",
			),
		),
		"snacks" => array(
			array(
				"name" => "Pasolivo",
				"description" => "Olive oil & vinegar tasting. They have a small tasting room in downtown Paso as well, but head over to the Vineyard Dr (off West-46). location where they have a nice olive farm right in the thick of the wineries. We treat it as a fun way to grab snacks to break up all the tastings. Insanely fruity olive oils here. The Tuscan Olive Oil, Lemon Garlic Olive Oil, Sugar-kissed Jalapeno Mustard, Truffle salt, and Ghost Pepper salt are some of our favorites.",
			),
			array(
				"name" => "Grey Wolf Cellars",
				"description" => "Can't speak for their wines, but this is a well-known spot to grab a good lunch while on the tasting trail. They'll usually have tri-tip sandwiches or mac n cheese or something heavy to soak up the alcohol. Grab a bite and take a look at our castle in the distance!",
			),
			array(
				"name" => "Twisted and Glazed",
				"description" => "24hr doughnut shop walkable from the hotel. Wacky and traditional flavors.",
			),
			array(
				"name" => "Brown Butter Cookie Co.",
				"description" => "Shortbread cookies in many different flavors. Tasting room is in downtown Paso.",
			),
			array(
				"name" => "Kreuzberg Coffee",
				"description" => "Cutesy coffee shop that also has some bites to eat like a breakfast burrito and pastries.",
			),
		),
		"wineries" => array(
			array(
				"name" => "Castoro Cellars",
				"region" => "W",
				"description" => "High hit rate here. Generous tasting (often they'll give you bonus pours). We dig their Primitivo but there are about 4 or 5 worth purchasing.",
			),
			array(
				"name" => "Re:Find / Villicana Winery",
				"region" => "W",
				"description" => "This distillery (Re:Find) makes vodka, gin, and whiskey from grapes. The mouthfeel and taste is noticably smoother than anything you've had. Their wines (Villicana), owned by the same people, are terrific in their own right.",
			),
			array(
				"name" => "Zenaida Winery",
				"region" => "W",
				"description" => "Our favs are their Grenache and their Wanderlust (Grenache-Syrah-Mourvèdre). If you're lucky enough to get Kenvin he'll make sure you try everything worth trying.",
			),
			array(
				"name" => "Four Sisters Winery",
				"region" => "E",
				"description" => "Just a great all-around wines here. Tasted about 7 or 8 wines and loved them all it seemed. Terrific hit rate.",
			),
			array(
				"name" => "Daou",
				"region" => "W",
				"description" => "Go here for the view alone. Tastings are the most expensive we've seen in Paso ($25 for cheapest), but if you're buying a bottle (you will want to, their wines are quality), it becomes worth it. Their rosé was so good we ended up getting a magnum.",
			),
			array(
				"name" => "J. Lohr",
				"region" => "E",
				"description" => "Other than Justin, this is probably the most recognizable Paso brand. If you're a fan of bolder reds like Cabernet and Syrah then this is your spot.",
			),
			array(
				"name" => "Firestone-Walker Brewery",
				"region" => "E",
				"description" => "For all the beer folk. Or just wait 'til the wedding where we'll have two of their beers waiting for you.",
			),
		)
	);
?>

<div class="grid-container">
	<h3 class="script">Recommendations</h3>
	<section id='paso'>
		<div class="grid-x callout alert wine">
			<div class="small-6 cell">
				<a href="https://pasoroblesdailynews.com/wp-content/uploads/2016/05/Paso-Robles-Winery-Map.jpg">
					<div class="wine_map">
						<img src="https://pasoroblesdailynews.com/wp-content/uploads/2015/05/Paso-Robles-Winery-Map-2.jpg">
					</div>
				</a>
				<span>Click to enlarge/print</span>
			</div>
			<div class="small-6 cell blurb">
				<h5>Wine Tasting</h5>
				<p>Paso Robles is a wine-producing region in the Central Coast of California.</p>
				<p>Here is just an idea of how many will be nearby. Paso folk seem to refer to their region as having a west side and an east side.
					They're referring to West and east of Highway 101, usually off of Route 46. West and East 46 are bizarrely divorced (bad word choice?) from each other by a couple mile 
					stretch of Highway 101, as you can see in the map. The two regions are not far from one another, but it's wise to plan on hitting similarly-located 
					wineries before crossing over to maximize efficiency instead of zig-zagging back and forth.</p>
			</div>
		</div>
		<div class="wineries">
			<h2>Wineries / Distilleries / Breweries</h2>
			<div class="grid-x">
				<div class="cell large-4 large-offset-4">
					<img src="/img/levigne.jpg" class="">
					<h6>Too on-the-nose? Yeah, we've never walked in here.</h6>
				</div>
			</div>
			<p>To reduce overwhelm, we're only including a few of our favorite wineries, as part of the fun is to discover new spots and 
				see where the day takes you. Most wineries are open from 11a-5p but you'll find a rare one that opens/closes an hour earlier 
				or later. Tastings tend to be $5-15 range, but they almost-always waive the tasting fee if you buy a bottle, so often it'll make
				sense to do that, especially for CA folk who aren't concerned with TSA. <strong>Pro-tip:</strong>If you're doing a lot of tastings, SHARE a tasting at each place. Yes, that is a thing,
				and it'll save your life.
			</p>
			<table>
				<th>Winery</th><th>West/East-46</th><th></th>
				<?php foreach ($recs["wineries"] as $key => $winery) {
					echo(sprintf("<tr><td>%s</td><td>%s</td><td>%s</td></tr>", $winery["name"], ($winery["region"] === "W" ? "West" : "East"), $winery["description"]));
				}
				?>
			</table>
		</div>
		<div class="snacks">
			<h2>Snacks</h2>
			<p>There's plenty of food in downtown Paso, but if you find yourself in the West-46 region, it can be hard to grab a bite without leaving and coming back. For breaking up the wine tasting, head to these spots:</p>
			<table>
				<?php foreach ($recs["snacks"] as $key => $snack) {
					echo(sprintf("<tr><td>%s</td><td>%s</td></tr>", $snack["name"], $snack["description"]));
				}
				?>
			</table>
		</div>
		<div class="restaurants">
			<h2>Restaurants</h2>
			<table>
				<?php foreach ($recs["restaurants"] as $key => $resto) {
					echo(sprintf("<tr><td>%s</td><td>%s</td></tr>", $resto["name"], $resto["description"]));
				}
				?>
			</table>
		</div>
	</section>
</div>