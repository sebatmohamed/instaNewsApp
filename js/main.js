$(function() {
  $(function() {
    $("#my-select-menu").on("change", function() {
      
      const section = $("#my-select-menu").val();

      let counter = 0


      $.getJSON(
        `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=GcbW6tsU7sr1adidcqfTOzJOuNt1kwBv`
      ).done(function(data) {

        $.each(data.results, function(index, value) {
          const $media = value.multimedia;
          const $abstract = value.abstract;
          const $articlelink = value.url

          if ($media.length !== 0 && counter >= 0) {
            counter++;
            $("#top-stories").append(` <figure class="stories">
                                        <a target="_blank" href="${$articlelink}">
                                        <img class="image" src="${$media[4].url}"/></a>
                                        <figcaption class="abstract">${$abstract}</figcaption>
                                      </figure>`);
            return counter < 12;

          }
        });
      });

      $("#top-stories").html("").attr("src", `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=GcbW6tsU7sr1adidcqfTOzJOuNt1kwBv`)

    });
  });
});
