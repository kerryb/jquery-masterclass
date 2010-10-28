$(document).ready(function() {
  $("#selector").focus();
  $("#submit").click(runQuery);
});

function runQuery() {
  var selector = $("#selector").val();
  var operation = $("#operation").val();
  try {
    eval('$("' + selector + '").' + operation + ';');
  } catch (error) {
    alert(error);
  }
  return false;
}
