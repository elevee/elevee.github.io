$(document).ready(function(){
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


	// Modal stuff
	$("#rsvp_modal").iziModal({
		width: 700,
		closeButton: true,
		title: "RSVP",
		subtitle: "Let Us Know",
		// overlayColor: 'rgba(0, 0, 0, 0.4)',
	    // headerColor: '#88A0B9',
	 //    background: null,
	 //    theme: '',  // light
	 //    icon: null,
	 //    iconText: null,
	 //    iconColor: '',
	 //    rtl: false,
	 //    top: null,
	 //    bottom: null,
	 //    borderBottom: true,
	 //    padding: 0,
	 //    radius: 3,
	 //    zindex: 999,
	 //    iframe: false,
	 //    iframeHeight: 400,
	 //    iframeURL: null,
	 //    focusInput: true,
	 //    group: '',
	 //    loop: false,
	 //    navigateCaption: true,
	 //    navigateArrows: true, // Boolean, 'closeToModal', 'closeScreenEdge'
	 //    history: false,
	 //    restoreDefaultContent: false,
	 //    autoOpen: 0, // Boolean, Number
	 //    bodyOverflow: false,
	 //    fullscreen: false,
	 //    openFullscreen: false,
	 //    closeOnEscape: true,
	 //    appendTo: 'body', // or false
	 //    appendToOverlay: 'body', // or false
	 //    overlay: true,
	 //    overlayClose: true,
	 //    overlayColor: 'rgba(0, 0, 0, 0.4)',
	 //    timeout: false,
	 //    timeoutProgressbar: false,
	 //    pauseOnHover: false,
	 //    timeoutProgressbarColor: 'rgba(255,255,255,0.5)',
	 //    transitionIn: 'comingIn',
	 //    transitionOut: 'comingOut',
	 //    transitionInOverlay: 'fadeIn',
	 //    transitionOutOverlay: 'fadeOut',
	 //    onFullscreen: function(){},
	 //    onResize: function(){},
	 //    onOpening: function(){},
	 //    onOpened: function(){},
	 //    onClosing: function(){},
	 //    onClosed: function(){},
	 //    afterRender: function(){}
	});

	$(document).on('click', '.trigger', function (event) {
	    event.preventDefault();
	    $('#rsvp_modal').iziModal('open');
	});

		// Submit on Modal
	$("form").on('click', "input[type='submit'][id='lookup']", function (event) {
	    event.preventDefault();
	    var input = {
	    	type: "lookup",
	    	query: $("#inviteCode").val().toUpperCase().trim()
	    }
	    console.log(input);
	    
	    $('#rsvp_modal').iziModal('startLoading');
	    $.ajax({
			url: "http://www.levinelabs.com/rsvp-ajax.php",
			data: input,
			dataType: "json"
		}).done(function(data){
			console.log("Response: "+JSON.stringify(data));
			if(data && data.status === "SUCCESS"){
					var _html  = "<div class='grid-x grid-padding-x>'";
		    		_html += 	"<h2>Found ya!</h2>";
		    		_html += 	"<div class='medium-12 cell'>";
		    		_html += 		"<p>Invite Code <span id='inviteCode'>"+data.record.code+"</span></p>";
		    		_html += 	"</div>";
		    		_html += "</div>";
		    		_html += "<div class='grid-x grid-padding-x>'";
		    		_html += 	"<div class='medium-12 cell'>";
		    		_html += 		"<p>Name on invitation <span id='inviteName'>"+data.record.name+"</span></p>";
		    		_html += 	"</div>";
		    		_html += 	"<div class='medium-12 cell'>";
		    		_html += 		"<p>Size of Party<span id='inviteSize'>"+data.record.size+"</span></p>";
		    		_html += 	"</div>";
		    		_html += 	"<div class='medium-12 cell'>";
		    		_html += 		"<label for='inviteNotes'>Notes/Remarks (limit 200)</label>";
		    		_html += 		"<textarea id='inviteNotes' maxlength='200'></textarea>";
		    		_html += 	"</div>";
				    _html += "</div>";
				    _html += 	"<div class='medium-12 cell'>";
				    _html += 		"<div class='confirm button success' data-decision='yes'>Going</div>"
				    _html += 		"<div class='confirm button alert' data-decision='no'>Not Going</div>"
				    _html += 	"</div>";
				    _html += "<div class='grid-x grid-padding-x>'";

				    _html += "</div>";
				$('#rsvp_modal').iziModal('setContent', _html);
				$('#rsvp_modal').iziModal('stopLoading');

				$("#rsvp_modal").on("click", "div.confirm", function(event){
					event.preventDefault();
					$('#rsvp_modal').iziModal('startLoading');
					var postData = {
						type: "confirm",
						inviteCode: $("#inviteCode").html().trim(),
						attending: $(event.target).attr('data-decision'),
						notes: $("textarea").val()
					}
					console.log("Submitting confirmation: "+JSON.stringify(postData));

					$.ajax({
						url: "http://www.levinelabs.com/rsvp-ajax.php",
						method: "post",
						data: postData,
						dataType: "json"
					}).done(function(data){
						console.log("Response: "+JSON.stringify(data));
						if(data && data.status === "SUCCESS"){
								var _html  = "<div class='grid-x grid-padding-x>'";
					    		_html += 	"<h2>Thank you! Your RSVP has been recorded.</h2>";
					    		_html += 	"<div class='medium-12 cell'>";
					    		// if(){
					    		_html += 		"<p>Blah blah the result blah blah.</p>";
					    		// } else {

					    		// }
					    		_html += 	"</div>";
					    		_html += "</div>";
					    		_html += "<div class='grid-x grid-padding-x>'";
					    		_html += 	"<div class='medium-12 cell'>";
					    		_html += 		"<p>Name on invitation <span id='inviteName'>"+data.record.name+"</span></p>";
					    		_html += 	"</div>";
					    		_html += 	"<div class='medium-12 cell'>";
					    		_html += 		"<p>Size of Party<span id='inviteSize'>"+data.record.size+"</span></p>";
					    		_html += 	"</div>";
							    _html += "</div>";
							    _html += 	"<div class='medium-12 cell'>";
							    _html += 		"<div class='confirm button success'></div>"
							    _html += 	"</div>";
							    _html += "<div class='grid-x grid-padding-x>'";

							    _html += "</div>";
							$('#rsvp_modal').iziModal('setContent', _html);
							$('#rsvp_modal').iziModal('stopLoading');
						}
					}).fail(function(err){
						console.log("Error: "+JSON.stringify(err));
						$('#rsvp_modal').iziModal('stopLoading');
					});

				});
			}
		}).fail(function(err){
			console.log("Error: "+JSON.stringify(err));
			$('#rsvp_modal').iziModal('stopLoading');
		});
		
	    setTimeout(function(){
	    	
			    // 	<div class="g-recaptcha" data-sitekey=""></div>
			    // </div>
	    	// $("#swap").html(_html);
	    	
	    }, 1000);	    
	});

	// $.ajax({
	// 	url: "http://www.levinelabs.com/rsvp-ajax.php",
	// 	data: {
	// 		"type": "lookup",
	// 		"query": "TITS"
	// 	},
	// 	dataType: "json"
	// }).done(function(data){
	// 	console.log("Response: "+JSON.stringify(data));
	// }).fail(function(err){
	// 	console.log("Error: "+JSON.stringify(err));
	// });
});