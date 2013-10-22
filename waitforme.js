(function(){

    var v = "1.3.2";

    if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
	var done = false;
	var script = document.createElement("script");
	script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
	script.onload = script.onreadystatechange = function(){
	    if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
		done = true;
		initMyBookmarklet();
	    }
	};
	document.getElementsByTagName("head")[0].appendChild(script);
    } else {
	initMyBookmarklet();
    }
    
    function initMyBookmarklet() {

	$('head').append('<link rel="stylesheet" type="text/css" href="http://zvps.co/tvhack/waitforme.css">');
	$('#emp').append('<div id="wfm-container"><div class="wfm-header"><div class="wfm-logo"></div></div><div class="wfm-playback"><div class="countdown"><p>Playback Starts in...</p><div class="wfm-timer"><p id="wfm-countdown-timer">35<span>s</span></p></div></div></div><div class="wfm-login"><div class="wfm-members"></div></div></div>');


	$( "#emp" ).css({ 'margin' : '0', 'position' : 'relative', 'left' : '320px'});
	$( "#emp-container" ).css({ 'position' : 'relative'});


	$( "#emp" ).animate({
		left: "-=250"
		    }, 1000, function() {

		$( "#emp" ).css('float','left');
		$( "<iframe src='http://uk.zeebox.com/tv/rooms/c0426879-3b27-11e3-41a0-65fa576628a8/embedded' width='300' height='360' style='float:right'></iframe>"  ).insertAfter("#emp");
	    });


    }
})();