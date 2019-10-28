$(function() {
  $(function() {
    $("#sections").on("change", function() {
      $(".loader-gif").css("display", "block");

      $("#top-stories").empty();

      const section = $("#sections").val();

      let counter = 0;

      $.getJSON(
        `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=GcbW6tsU7sr1adidcqfTOzJOuNt1kwBv`
      )

        .done(function(data) {
          $(".loader-gif").hide();

          $.each(data.results, function(index, value) {
            const $media = value.multimedia;
            const $abstract = value.abstract;
            const $articlelink = value.url;

            if ($media.length !== 0 && counter >= 0) {
              counter++;
              $("#top-stories").append(`<figure class="stories">
                                        <a target="_blank" href="${$articlelink}">
                                        <img class="image" src="${$media[4].url}"/>
                                        <figcaption class="abstract">${$abstract}</figcaption></a>
                                      </figure>`);
              return counter < 12;
            }
          });
        })
        .fail(function(data) {
          $("#top-stories").append("<p class='error-message'>Sorry there was a problem, please try again</p>");
        });
    });
  });
});
