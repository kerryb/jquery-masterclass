$(document).ready(function() {
  roundCorners();
  $("#sample_content").load("sample_content.html");
});

function roundCorners() {
  $(".rounded").corner();
}
