if ($(window).width() <= 880) {
  $( ".nav-tabs .btn-desc" ).addClass( "active" );
  $("#specs").css("display", "none");
  $('.nav-tabs .btn-desc').click(function() {
    $( ".nav-tabs .btn-desc" ).addClass( "active" );
    $( ".nav-tabs .btn-specs" ).removeClass( "active" );
    $("#specs").css("display", "none");
    $("#desc,#services").css("display", "block");
  });
  $('.nav-tabs .btn-specs').click(function() {
    $( ".nav-tabs .btn-specs" ).addClass( "active" );
    $( ".nav-tabs .btn-desc" ).removeClass( "active" );
    $("#specs").css("display", "block");
    $("#desc,#services").css("display", "none");
  });


  var dropdown = document.getElementsByClassName("more_btn");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = $(this).parent().find('.desc');
    if (dropdownContent.css('display') == "none") {
      $(this).parent().find('.product1 ul').slideUp(200);

      $('.more_btn').removeClass("active");
      $(this).addClass("active");

      dropdownContent.slideDown(200);
    } else {

    dropdownContent.slideUp(200);

    }
    });
  }

  $('.more_btn').click(function() {
      $(this).find('.fas').toggleClass('fa-angle-down fa-angle-up');
  });

}