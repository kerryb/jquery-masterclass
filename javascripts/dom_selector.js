$(document).ready(function() {
  $("#selector").focus();
  highlighted_selector = ""
  $("#selector").keyup(highlightSelected);
});

function highlightSelected() {
  $(highlighted_selector).removeClass("selected");
  highlighted_selector = $("#selector").val();
  try {
    $(highlighted_selector).addClass("selected");
  } catch (error) {
    highlighted_selector = ""
  }
}
