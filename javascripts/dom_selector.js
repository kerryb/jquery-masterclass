$(document).ready(function() {
  SELECTOR.init();
});

var SELECTOR = {
  highlighted_elements: "",
  init: function() {
    $("#selector").focus();
    $("#selector").keyup(this.highlightSelected);
  },
  highlightSelected: function() {
    $(this.highlighted_elements).removeClass("selected").filter(":checkbox,:radio").unwrap();
    this.highlighted_elements = "#sample_content " + $("#selector").val();
    try {
    $(this.highlighted_elements).addClass("selected").filter(":checkbox,:radio").
      wrap('<div class="selected_wrapper">');
    } catch (error) {
      this.highlighted_elements = "";
    }
  }
}
