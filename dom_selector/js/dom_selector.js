$(document).ready(function() {
  SELECTOR.init();
});

var SELECTOR = {
  highlighted_elements: $(),
  init: function() {
    this.highlighted_elements = $();
    $("#selector").focus();
    $("#selector").keyup(this.highlightSelected);
    $("input,select,textarea").change(this.highlightSelected);
  },
  highlightSelected: function() {
    $(this.highlighted_elements).removeClass("selected").filter(":checkbox,:radio").unwrap();
    selector = "#sample_content " + $("#selector").val();
    try {
      this.highlighted_elements = $(selector);
      this.highlighted_elements.addClass("selected").filter(":checkbox,:radio").
        wrap('<div class="selected_wrapper">');
    } catch (error) {
      // Probably a half-typed selector -- ignore it.
      this.highlighted_elements = $();
    }
  }
}
