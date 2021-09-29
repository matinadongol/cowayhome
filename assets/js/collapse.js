$(window).on('resize', function() {
    var win = $(this);
    if (win.width() < 600) {
  
      $('#description').addClass('collapse');
      $('#specs').addClass('collapse');
  
    } else {
      $('#description').removeClass('collapse');
      $('#specs').removeClass('collapse');
    }
  });