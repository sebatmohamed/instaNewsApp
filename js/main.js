$(function() {
  $(function() {
    $("#my-select-menu").on("change", function() {
      const section = $("#my-select-menu").val();

      $.getJSON(
        `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=GcbW6tsU7sr1adidcqfTOzJOuNt1kwBv`
      )
      .done(function(data) {
        $.each(data.results, function(index, value) {
          console.log(value.title)
          return index < 11
        });
      });
    });
  });
});
