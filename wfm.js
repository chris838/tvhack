$( "#emp" ).css({ 'margin' : '0', 'position' : 'relative', 'left' : '320px'})
$( "#emp-container" ).css({ 'position' : 'relative'})

$( "#emp" ).animate({
    left: "-=250"
  }, 1000 );

var countdown = 30
var timer = setInterval(function(){ onTimer() }, 1000)

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


var members = $('.member');

var members = []
var names = [ 'Areion', 'Chris', 'Steve', 'Alex' ]
$( ".member" ).css( { 'width' : '50px', 'float' : 'left' , 'position' : 'relative' } );

$( ".member" ).each( function( index, elem )
    {
        console.log(  $(elem).css( {'left' : ( 350 + 50 )+ 'px', 'opacity' : '0' }) )
        
        members.push( $(elem))
    }
)

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
        
        timeout = setTimeout( function() { moveElement() }, 1000 );
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