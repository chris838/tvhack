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
	(window.myBookmarklet = function() {

	    if ($("#wikiframe").length == 0) {

    var login_width = 770;
    var login_left = ($( window ).width() - login_width) / 2;

		var s = "Test Search Text";
		if ((s != "") && (s != null)) {
		    $("body").append("\
<div id='wikiframe'>\
<div id='wikiframe_veil' style=''>\
</div>\
<iframe id='iframe' src='http://zvps.co/tvhack/login.html' onload=\"$('#wikiframe iframe').show(300);\">Enable iFrames.</iframe>\
<style type='text/css'>\
#wikiframe_veil { display: none; position: fixed; width: 100%; height: 100%; top: 0; left: 0; background-color: rgba(0,0,0,.8); cursor: pointer; z-index: 900; }\
#wikiframe_veil p { color: black; font: normal normal bold 20px/20px Helvetica, sans-serif; position: absolute; top: 50%; left: 50%; width: 10em; margin: -10px auto 0 -5em; text-align: center; }\
#wikiframe iframe  { display: none; position: fixed; top: 10%; left: "+login_left+"px; width: "+login_width+"px; height: 420px; z-index: 999; border: 10px solid rgba(0,0,0,.5); margin: -5px 0 0 -5px; }\
</style>\
</div>");
		    $("#wikiframe_veil").fadeIn(500);
		}
	    } else {
		$("#wikiframe_veil").fadeOut(200);
		$("#wikiframe iframe").hide(200);
		setTimeout("$('#wikiframe').remove()", 750);
	    }
	    $("#wikiframe_veil").click(function(event){

		    $("#iframe").attr('src',"http://zvps.co/tvhack/login_loading.html");

		    setTimeout( function() {

		    $("#wikiframe_veil").fadeOut(200);
		    $("#wikiframe iframe").hide(200);
		    setTimeout("$('#wikiframe').remove()", 750);

	$('head').append('<link rel="stylesheet" type="text/css" href="http://zvps.co/tvhack/waitforme.css">');
	$('#emp').append('<div id="wfm-container"><div class="wfm-header"><div class="wfm-logo-header"><div class="wfm-logo"></div></div></div><div class="wfm-playback"><div class="countdown"><p>Playback Starts in...</p><div class="wfm-timer"><p id="wfm-countdown-timer">32<span>s</span></p></div></div></div><div class="spacer"></div><div class="wfm-login"><div id="wfm-members-container" class="wfm-members"><div id="member-1" class="member"><img src="http://zvps.co/tvhack/member-1.jpg" width="50" height="50" /></div><div id="member-2" class="member"><img src="http://zvps.co/tvhack/member-2.jpg" width="50" height="50" /></div><div id="member-3" class="member"><img src="http://zvps.co/tvhack/member-3.jpg" width="50" height="50" /></div><div id="member-4" class="member"><img src="http://zvps.co/tvhack/member-4.jpg" width="50" height="50" /></div></div><div id="member-name"><p class="wfm-member-name"></p></div></div></div>');


	$( "#emp" ).css({ 'margin' : '0', 'position' : 'relative', 'left' : '170px'});
	$( "#emp-container" ).css({ 'position' : 'relative'});

var members = $('.member');
var members = [];
var names = [ 'Areion', 'Chris', 'Steve', 'Alex' ]
    $( ".member" ).css( { 'width' : '50px', 'float' : 'left' , 'position' : 'relative' } );

$( ".member" ).each( function( index, elem )
		     {
			 
			 $(elem).css( {'left' : ( 350 + 50 )+ 'px', 'opacity' : '0' });
			 members.push( $(elem));
			     }
		     )

	$( "#emp" ).animate({
		left: "-=150"
		    }, 1000, function() {

		$( "#emp" ).css('float','left');
		$( "<iframe src='http://uk.zeebox.com/tv/rooms/c0426879-3b27-11e3-41a0-65fa576628a8/embedded' width='300' height='600' style='float:right'></iframe>"  ).insertAfter("#emp");

		var countdown = 32;
		var timer = setInterval(function(){ onTimer() }, 1000);

		var timeout = setTimeout( function() { moveElement() }, 1000 );

var currentindex = 0
    function moveElement()
{
    if ( currentindex < members.length )
	{   
	    $('.wfm-member-name').css({ 'opacity' : '0' })
        var elem = members[ currentindex ]
	    $( elem ).animate({ left : '-=375', opacity : '1' });
	    $('.wfm-member-name').html( names[currentindex] +' has logged in').animate({ opacity : '1' }, 1000, onComplete)
        currentindex ++
        
	    timeout = setTimeout( function() { moveElement() }, 3000 );
	} else {
        clearTimeout( timeout );

    }
}

function onComplete()
{
    if ( currentindex == 3 ) {
	$('.wfm-member-name').css({ 'opacity' : '0' })
	    } 
    else { $('.wfm-member-name').css({ 'opacity' : '1' }) }
}

function onTimer()
{
    if ( countdown > 0)
	{
	    $('#wfm-countdown-timer').html( countdown-- +'<span>s</span>')
	}
    else {
	window.clearInterval( timer );
	window.embeddedMedia.playerInstances.emp.setFlashvar('config_settings_autoPlay', 'true');
	window.embeddedMedia.playerInstances.emp.writeEmp()
    }

}
	    });
			}, 5000 );

		});


	})();
    }

})();