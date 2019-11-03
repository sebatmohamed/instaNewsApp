$(function() {
  $(function() {
    $("#sections").on("change", function() {

      $(".loader-gif").css("display", "block");

      $("#top-stories").empty();

      $("#error").empty()

      $("header").addClass("move-header");
      $(".container").addClass("move-header");

      const section = $("#sections").val();

      let counter = 0;

      $.getJSON(
        `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=GcbW6tsU7sr1adidcqfTOzJOuNt1kwBv`
      )

        .done(function(data) {
          $(".loader-gif").fadeOut(1250);

          $.each(data.results, function(index, value) {
            const $media = value.multimedia;
            const $abstract = value.abstract;
            const $articlelink = value.url;

            if ($media.length !== 0 && counter >= 0) {
              counter++;

              setTimeout(() => {
                 $("#top-stories").append(`<figure class="stories">
                                        <a target="_blank" href="${$articlelink}">
                                        <img class="image" src="${$media[4].url}"/>
                                        <figcaption class="abstract">${$abstract}</figcaption></a>
                                      </figure>`);
              }, 1500);
             
              return counter < 12;
            }
          });
        })
        .fail(function(data) {
          setTimeout((error) => {
            $("#error").append('<h1 class="error-message">Sorry there was a problem, please try again</h1>')
          }, 6000);
        });
    });
  });
});
