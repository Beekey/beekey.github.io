$(document).ready(function(){
  $("body").addClass("text-center");
  $("img").addClass("img-responsive img-thumbnail");
});
  // animate section titles while page is loading
$(".section-name").addClass("animated zoomIn");
// wait for initial animation to play out then remove it
setTimeout(function(){ $(".section-name").removeClass("animated zoomIn"); }, 1000);
// animate section titles on hover
$(".section-name").hover(function(){$(this).addClass("animated pulse");},
                         function(){$(this).removeClass("animated pulse");});

// animate project thumbnail on hover 
// seems somewhat annoying so I'll leave it out for now 
/*
$(".project-box").hover(function(){$(this).addClass("animated pulse");},function(){$(this).removeClass("animated pulse");});
*/
//-------------------------------------------------------------
// closes manu after a click on one of the menu links
// only relevant when display space is narrow enough
// to display a hamburger menu
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});
