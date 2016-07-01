$(document).ready(function(){
  $("body").addClass("text-center");
  $("img").addClass("img-responsive img-thumbnail");
});
  $(".section-name").addClass("animated zoomIn");
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});