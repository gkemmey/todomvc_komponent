import "./todos.scss";
import "./header/todos_header";
import "./toggle_all/todos_toggle_all";
import "./list/todos_list";

on(document, "click", "[data-behavior~=submit_form_when_clicked]", function(event) {
  this.closest("form").submit();
});
