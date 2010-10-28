$(document).ready(function() {
  $("#selector").focus();
  $("#selector").keyup(highlightSelected);
});

function highlightSelected() {
  $("*").removeClass("selected");
  var highlighted_selector = $("#selector").val();
  try {
    $(highlighted_selector).addClass("selected");
  } catch (error) {
  }
}
