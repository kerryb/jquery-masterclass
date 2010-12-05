$(document).ready(function() {
  SELECTOR.init();
});

var SELECTOR = {
  highlighted_selector: "",
  init: function() {
    $("#selector").focus();
    $("#selector").keyup(this.highlightSelected);
  },
  highlightSelected: function() {
    $(this.highlighted_selector).removeClass("selected");
    this.highlighted_selector = "#sample_content " + $("#selector").val();
    try {
      $(this.highlighted_selector).addClass("selected");
    } catch (error) {
      this.highlighted_selector = "";
    }
  }
}
