$(document).ready(function() {
    $(".timeline li").hover(
      function() {
        var target = $(this).data('target');
        $('.desc').hide();  // Hide all descriptions
        $('#' + target).show();  // Show the corresponding description
      },
      function() {
        $('.desc').hide();  // Hide the description when the mouse leaves
      }
    );
  });