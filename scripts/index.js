//common js for all pages
$(document).ready(function(){

	// ************ RSVP MODAL ************

	function validateEmail(email) {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(String(email).toLowerCase());
	}

	$("#rsvp_modal").iziModal({
		width: 700,
		height: 500,
		closeButton: true,
		title: "RSVP",
		subtitle: "Let Us Know",
		// overlayColor: 'rgba(0, 0, 0, 0.4)',
	    headerColor: "#93002A", //'#88A0B9',
	 //    background: null,
	 //    theme: '',  // light
	 //    icon: null,
	 //    iconText: null,
	 //    iconColor: '',
	 //    rtl: false,
	 //    top: null,
	    // setTop: 100,
	 //    bottom: null,
	 //    borderBottom: true,
	 //    padding: 0,
	 //    radius: 3,
	 //    zindex: 999,
	 //    iframe: false,
	    // iframeHeight: 400,
	 //    iframeURL: null,
	 //    focusInput: true,
	 //    group: '',
	 //    loop: false,
	 //    navigateCaption: true,
	 //    navigateArrows: true, // Boolean, 'closeToModal', 'closeScreenEdge'
	 //    history: false,
	 //    restoreDefaultContent: false,
	 //    autoOpen: 0, // Boolean, Number
	    bodyOverflow: true,
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
	    onOpened: function(modal){
	    	// setTimeout(function(){
	    	// 	$("#rsvp_modal .iziModal-wrap").scrollTop(0);
	    	// }, 1);
	    },
	 //    onClosing: function(){},
	    onClosed: function(){
	    	$("#rsvp_modal").iziModal("resetContent");
	    },
	    afterRender: function(){
	    	// setTimeout(function(){
	    	// 	$("#rsvp_modal").css("max-height", "400px");
	    	// }, 1000);
	  //   	setTimeout(function(){
			// 	if($("button#lookup").is(":visible")){
			// 		$("#rsvp_modal").css("min-height", "475px");
			// 	}
			// }, 1000);
	    }
	});

	$(document).on('click', '.trigger', function (event) {
	    event.preventDefault();
	    $('#rsvp_modal').iziModal('open');
	});

	$(document).on('click', "button.reset", function (event) {
		$('#rsvp_modal').iziModal('resetContent');
		$("#rsvp_modal").css("min-height", "475px");
	});

	// Submit on Modal
	$("form").on('click', "button[id='lookup']", function (event) {
	    event.preventDefault();
		var input = {
			type: "lookup",
			query: $("#inviteCode").val().toUpperCase().trim(),
			zipCode: $("#zipCode").val().trim(),
		};
		// console.log(input);

		//quick n dirty validation
		if((!input["query"] || input["query"] == "") || (!input["zipCode"] || input["zipCode"] == "")){
			alert("Please fill out the invite code that came with your reservation & home zip code.");//error message
			return;
		}
		
		$('#rsvp_modal').iziModal('startLoading');
		$.ajax({
			url: "http://www.levinelabs.com/rsvp-ajax.php",
			data: input,
			dataType: "json",
			success: function(data){
				// console.log("Response: "+JSON.stringify(data));
				if(data && data.status === "SUCCESS"){
					var _html  = "<div class='grid-x grid-padding-x'>";
						_html += 	"<div class='medium-12 cell guest'>";
						_html += 		"<h1><span id='inviteName'>"+data.record.name+"</span><br/><span id='inviteCode'>("+data.record.code+")</span></h1>";
						_html += 	"</div>";
						_html += "</div>";
						_html += "<div class='grid-x grid-padding-x'>";
						_html += 	"<div class='<medium-12 medium-offset-3 cell switch-field'>";
						_html += 		"<div class='switch-title'>Attending?</div>";
						_html += 		"<input type='radio' id='attending_yes' name='attending' value='Y' checked/>";
						_html += 		"<label for='attending_yes'>Yes</label>";
						_html += 		"<input type='radio' id='attending_no' name='attending' value='N' />";
						_html += 		"<label for='attending_no'>No</label>";
						_html += 	"</div>";
						_html += "</div>";
						_html += 	"<div class='large-12 cell'>";
						_html += 		"<label for='email'>Email address (for confirmation)</label>";
						_html += 		"<input type='text' id='email' name='email' value='"+data.record.email+"'/>";
						_html += 	"</div>";
						_html +=	"<div id='if_attending'>";
						_html += 		"<div class='grid-x grid-padding-x'>";
						_html += 			"<div class='large-12 cell attendance'>";
						_html += 				"<select>";
												var i = 1;
												while(i <= parseInt(data.record.size)){
													_html += "<option value='"+i+"' "+(data.record.num_attending == i ? "selected=selected": "")+">"+i+"</option>";
													i++;
												}
						_html += 				"</select>";
						_html += 				"<span>of <span id='inviteSize'>"+data.record.size+"</span> attending</span>";
						_html += 			"</div>";
						_html += 		"</div>";
						_html += 		"<div class='grid-x grid-padding-x'>";
						_html += 			"<div class='large-12 cell rsvp_question'>";
						_html += 				"<p>Attending Welcome Cocktails? (Fri 9/7 5p)</p>";
						_html += 				"<input type='radio' id='attending_welcome1' name='attending_welcome' value='Y' "+(data.record.attending_welcome == "Y" ? "checked" : "")+"/>";
						_html += 				"<label for='attending_welcome'>Yes</label>";
						_html += 				"<input type='radio' id='attending_welcome2' name='attending_welcome' value='N' "+(data.record.attending_welcome == "N" ? "checked" : "")+"/>";
						_html += 				"<label for='attending_welcome'>No</label>";
						_html += 			"</div>";
						_html += 			"<div class='large-12 cell rsvp_question'>";
						_html += 				"<p>Choose pre-wedding shuttle (Sat 9/8)</p>";
												data.shuttles.forEach(function(shuttle){
													if(parseInt(shuttle.remaining) > parseInt(data.record.size)){
														_html += "<input type='radio' id='shuttle"+shuttle.number+"' name='shuttle' value='"+shuttle.number+"' "+(data.record.shuttle === shuttle.number ? "checked" : "")+"/>";
														_html += "<label for='shuttle"+shuttle.number+"'>"+shuttle.time+/*" ("+shuttle.remaining+" seat(s) remaining)*/"</label><br/>";
													} else {
														_html += "<span>"+shuttle.time+" (Full)</span><br/>";
													}
												});
						_html += 				"<input type='radio' id='shuttle_none' name='shuttle' value='self' "+(data.record.shuttle === "self" ? "checked" : "")+"/>";
						_html += 				"<label for='shuttle_none'>None / Self transport </label><br/>";
			    		_html += 			"</div>";
			    		_html += 		"</div>";
			    		_html += 		"<div class='grid-x grid-padding-x'>";
				    	_html += 			"<div class='large-12 cell rsvp_question'>";
				    	_html += 				"<p>Attending Farewell Brunch?  (Sun 9/9 10a)</p>";
				    	_html += 				"<input type='radio' id='attending_brunch1' name='attending_brunch' value='Y' "+(data.record.attending_brunch == "Y" ? "checked" : "")+"/>";
				    	_html += 				"<label for='attending_brunch'>Yes</label>";
				    	_html += 				"<input type='radio' id='attending_brunch2' name='attending_brunch' value='N' "+(data.record.attending_brunch == "N" ? "checked" : "")+"/>";
				    	_html += 				"<label for='attending_brunch'>No</label>";
				    	_html += 			"</div>";
				    	_html += 		"</div>";
			    		_html += 	"</div>";
			    		_html += 	"<div class='medium-12 cell'>";
			    		_html += 		"<label for='inviteNotes'>Notes/Remarks (limit 200)</label>";
			    		_html += 		"<textarea id='inviteNotes' maxlength='200'>"+(data.record.notes ? data.record.notes : "")+"</textarea>";
			    		_html += 	"</div>";
					    _html += "</div>";
					    _html += "<div class='grid-x grid-padding-x'>";
					    _html += 	"<div class='medium-2 medium-offset-5 cell'>";
					    // _html += 		"<div class='confirm button success' data-decision='yes'>Going</div>";
					    _html += 		"<button class='confirm button'>Submit</button>";
					    _html += 	"</div>";
					    _html += "</div>";
					    // _html += "<div class='grid-x grid-padding-x>'";

					    // _html += "</div>";
					$('#rsvp_modal').iziModal('setContent', _html);
					$('#rsvp_modal').iziModal('stopLoading');

					$(".switch-field").on("click", "label", function(event){
						// console.log("you just clicked: "+$(this).attr('for'));
						if($(this).attr("for") == "attending_yes"){
							$("#if_attending").slideDown();
						} else {
							$("#if_attending").slideUp();
						}
					});

					if(data.record.attending && data.record.attending.length > 0){ //if they already rsvped NO, it shows that and hides the other questions
						// console.log("Data Record attending length!", data.record.attending.length);
						if(data.record.attending == "N"){ $("label[for=attending_no]").click(); }
					}

					$("#rsvp_modal").on("click", "button.confirm", function(event){
						event.preventDefault();
						$('#rsvp_modal').iziModal('startLoading');
						var _email = $("#email").val().trim();
						var postData = {
							type: "confirm",
							email: _email,
							inviteCode: $("#inviteCode").html().trim().replace(/\(|\)/g, ""), //removing parenthesis
							num_attending: $(".attendance select").val(),
							attending: $("input[name=attending]:checked").val(),
							attending_welcome: (document.querySelector('input[name="attending_welcome"]:checked') && document.querySelector('input[name="attending_welcome"]:checked').value)?document.querySelector('input[name="attending_welcome"]:checked').value : null,
							attending_brunch: (document.querySelector('input[name="attending_brunch"]:checked') && document.querySelector('input[name="attending_brunch"]:checked').value)?document.querySelector('input[name="attending_brunch"]:checked').value : null,
							shuttle: (document.querySelector('input[name="shuttle"]:checked') && document.querySelector('input[name="shuttle"]:checked').value)?document.querySelector('input[name="shuttle"]:checked').value : null,
							notes: $("textarea").val()
						};
						//quick n dirty validation
						if(	postData["attending"] == "Y" &&
								(
									!postData["inviteCode"] ||
									!postData["attending_welcome"] ||
									!postData["attending_brunch"] ||
									!postData["shuttle"]
								)
						){
							alert("Please fill out all applicable fields.");
							$('#rsvp_modal').iziModal('stopLoading');
							return;
						}

						if(!validateEmail(_email)){
							alert("Email invalid. Please check spelling and try again!");
							$('#rsvp_modal').iziModal('stopLoading');
							return;
						}

						// console.log("Submitting confirmation: "+JSON.stringify(postData));
						$.ajax({
							url: "http://www.levinelabs.com/rsvp-ajax.php",
							method: "post",
							data: postData,
							dataType: "json"
						}).done(function(data){
							// console.log("Response: "+JSON.stringify(data));
							if(data && data.status === "SUCCESS"){
								var _html  = "<div class='grid-x grid-padding-x rsvp_response'>";
								if(data.responseHeadline){
									_html += 	"<h1>"+data.responseHeadline+"</h1>";
								}
								if(data.responseText){
									_html += 	"<div class='medium-12 cell'>";
										_html += 	"<p>"+data.responseText+"</p>";
									_html += 	"</div>";
								}
								// _html += "<div class='grid-x grid-padding-x>'";
								// _html += 	"<div class='medium-12 cell'>";
								// _html += 		"<p>Name on invitation <span id='inviteName'>"+data.record.name+"</span></p>";
								// _html += 	"</div>";
								// _html += 	"<div class='medium-12 cell'>";
								// _html += 		"<p>Size of Party<span id='inviteSize'>"+data.record.size+"</span></p>";
								// _html += 	"</div>";
								// _html += "</div>";
								// _html += 	"<div class='medium-12 cell'>";
								// _html += 		"<div class='confirm button success'></div>";
								// _html += 	"</div>";
								// _html += "<div class='grid-x grid-padding-x>'";

									_html += "</div>";
								$('#rsvp_modal').iziModal('setContent', _html);
								$('#rsvp_modal').iziModal('stopLoading');
								$('#rsvp_modal').css("min-height", "auto");
							}
						}).fail(function(err, responseText, errorThrown){
							// console.log("Error: "+JSON.stringify(err));
							// console.log(responseText+": "+errorThrown);
							$('#rsvp_modal').iziModal('stopLoading');
						});

					});
				} else {
					if(data && data.status === "ERROR"){
						if(data.responseText){
							var _html = "<p>"+data.responseText+"</p>";
						}
						$(".lookup_error").html(_html);
						// var _html  = "<div class='grid-x grid-padding-x rsvp_response'>";
						// if(data.responseHeadline){
						// 	_html += 	"<h1>"+data.responseHeadline+"</h1>";
						// }
						// if(data.responseText){
						// 	_html += 	"<div class='medium-12 cell'>";
						// 		_html += 	"<p>"+data.responseText+"</p>";
						// 	_html += 	"</div>";
						// }
						// _html += "</div>";
						// _html += "<div class='grid-x grid-padding-x'>";
					 //    _html += 	"<div class='medium-2 medium-offset-5 cell'>";
					 //    _html += 		"<button class='reset button'>Try Again</button>";
					 //    _html += 	"</div>";
					 //    _html += "</div>";
						// $('#rsvp_modal').iziModal('setContent', _html);
						$('#rsvp_modal').iziModal('stopLoading');
						// $('#rsvp_modal').css("min-height", "auto");
					}
				}
			},
			error: function(err, responseText, errorThrown){
				console.log("Error: "+JSON.stringify(err));
				console.log(responseText+":  "+errorThrown);
				$('#rsvp_modal').iziModal('stopLoading');
			}
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
	// 		"query": "BEAR"
	// 	},
	// 	dataType: "json"
	// }).done(function(data){
	// 	console.log("Response: "+JSON.stringify(data));
	// }).fail(function(err){
	// 	console.log("Error: "+JSON.stringify(err));
	// });

	// ************ END RSVP MODAL ************
});