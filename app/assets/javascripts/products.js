
$(document).ready(function () {
  $('#product_category_name').autocomplete({
  source: $('#product_category_name').data('autocomplete-source')
  });
});


// _form.html.erbに下記を記述しページに情報を表示。
// その情報をリストとしてJqueryで取得
// <%= f.text_field :category_name, data: {autocomplete_source: Category.order(:name).map(&:name) } %>
//
//
// $( function() {
//   var availableTags = [
//     "ActionScript",
//     "AppleScript",
//     "Asp",
//     "BASIC",
//     "C",
//     "C++",
//     "Clojure",
//     "COBOL",
//     "ColdFusion",
//     "Erlang",
//     "Fortran",
//     "Groovy",
//     "Haskell",
//     "Java",
//     "JavaScript",
//     "Lisp",
//     "Perl",
//     "PHP",
//     "Python",
//     "Ruby",
//     "Scala",
//     "Scheme"
//   ];
//   $( "#tags" ).autocomplete({
//     source: availableTags
//   });
// } );
// </script>
