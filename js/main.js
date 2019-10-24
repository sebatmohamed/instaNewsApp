$(function() {
  $(function() {
    $("#my-select-menu").on("change", function() {
      const section = $("#my-select-menu").val();

      $.getJSON(
        `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=GcbW6tsU7sr1adidcqfTOzJOuNt1kwBv`
      ).done(function(data) {
        $.each(data.results, function(index, value) {
          const $media = value.multimedia;
          const $abstract = value.abstract;

          if ($media.length !== 0) {
            $("#top-stories").append(` <div class="stories">
                                        <img class="image" src="${$media[4].url}"/>
                                        <p class="abstract">${$abstract}</p>
                                      </div>`);
            return index < 11;
          }
        });
      });
    });
  });
});
