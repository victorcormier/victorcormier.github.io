//svg replacement
        $( document ).ready(function() {
      jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});
        });

//Case study expansion buttons

$(document).ready(function() {
    
    
    $('#hamburger').click(function(){
        $("#hamburger").toggleClass('box_highlight');
        $("#menu").toggleClass('menu_hide');
        $("#menu_exit_area").toggleClass('hidden');
    });
    
    
    $('#menu_exit_area').click(function(){
        $("#menu").toggleClass('menu_hide');
        $("#menu_exit_area").toggleClass('hidden');
        $("#hamburger").toggleClass('box_highlight');
    });
    
    
    $('#search_button').click(function(){
        $("#search_button").toggleClass('box_highlight');
        $("#search_overlay").toggleClass('hidden');
        $("#search_exit_area").toggleClass('hidden');
        $('#search_field').focus();
    });

    
    $('#search_exit_area').click(function(){
        $("#search_overlay").toggleClass('hidden');
        $("#search_exit_area").toggleClass('hidden');
        $("#search_button").toggleClass('box_highlight');
    });

    
    $('#cs_button_1').click(function(){
        $("#cs_content_1").toggleClass('hidden');
        $(".minuscontainer1").toggleClass('hidden');
    });

    
    $('#cs_button_2').click(function(){
        $("#cs_content_2").toggleClass('hidden');
        $(".minuscontainer2").toggleClass('hidden');
    });
    
    $('#cookie_warning').click(function(){
        $("#cookie_warning").toggleClass('hidden');
    });
    
    $('#question_1').click(function(){
        $("#answer_1").toggleClass('hidden');
    });
    
    $('#question_2').click(function(){
    $("#answer_2").toggleClass('hidden');
});

    $('#question_3').click(function(){
    $("#answer_3").toggleClass('hidden');
});

    $('#question_4').click(function(){
    $("#answer_4").toggleClass('hidden');
});

//Sticky CTA button
var $window = $(window),
   $stickyEl = $('#cta'),
   $margin = $('#intro_text'),
   elTop = $stickyEl.offset().top;

$window.scroll(function() {
    $stickyEl.toggleClass('cta_fixed', $window.scrollTop() > elTop+40);
    $margin.toggleClass('fixed_margin', $window.scrollTop() > elTop+40);
});
    
//Slideshow
var slides = document.getElementById('slideshow').getElementsByTagName('div');
function slideShow(i){ // http://jsfiddle.net/Wja4r/
	slides[i].className = '';
	if(i == slides.length -1){ slides[0].className = 'show'; i = -1; }
	if(i > -1 ){ slides[i+1].className = 'show'; }
    	setTimeout(function(){ slideShow(++i % slides.length) }, 5000); // show each slide for 5 secs
	}
    
setTimeout(function(){ slides[0].className = 'show'; }, 1); // style first slide on page load
setTimeout(function(){ slideShow(0) }, 4500); // show first slide for 5 secs
        
});