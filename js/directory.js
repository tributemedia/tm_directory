(function ($, Drupal) {
  
  var maxHeight = 0;

  $('.views-row .employee-wrapper .directory-info').each(function() {
    if($(this).height() > maxHeight) {
      maxHeight = $(this).height();
    }
  });
  $('.views-row .employee-wrapper .directory-info').height(maxHeight);
  
})(jQuery, Drupal);