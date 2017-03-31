$(function() {
  $('.goodcode pre').each(function(i, e) {
    $(e).append('<i style="" class="fa fa-check" aria-hidden="true"></i>');
  });
  
  $('.badcode pre').each(function(i, e) {
    $(e).append('<i style="" class="fa fa-times" aria-hidden="true"></i>');
  });
});
