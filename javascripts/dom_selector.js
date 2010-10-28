$(document).ready(function() {
  $("#selector").focus();
  $("#selector").keyup(highlightSelected);
  function removePreviousHighlighting() {}
});

function highlightSelected() {
  try {
    removePreviousHighlighting();
  } catch (error) {
  }
  highlighted_selector = $("#selector").val();
  try {
    $(highlighted_selector).addClass("selected");
  } catch (error) {
  }
  function removePreviousHighlighting() {
    $(highlighted_selector).removeClass("selected");
  }
}
