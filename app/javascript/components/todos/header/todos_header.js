import "./todos_header.scss";
import "../input/todos_input";

on(document, "ajax:complete", "[data-behavior~=has_children_that_clear_after_submission]", function(event) {
  var children = this.querySelectorAll("[data-behavior~=clears_after_submission]");

  for (var i = 0; i < children.length; ++i) {
    children[i].value = '';
  }
});
