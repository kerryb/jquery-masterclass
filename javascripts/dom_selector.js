$(document).ready(function() {
  $("#selector").focus();
  highlighted_selector = ""
  $("#selector").keyup(function() {
    $(highlighted_selector).css("background-color", "");
    highlighted_selector = $("#selector").val();
    try {
      $(highlighted_selector).css("background-color", "#ccf");
    } catch (error) {
      highlighted_selector = ""
    }
  });
});
