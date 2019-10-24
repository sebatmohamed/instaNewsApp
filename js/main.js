$(function() {
  $(function() {
    $("#my-select-menu").on("change", function() {
      const section = $("#my-select-menu").val();

      $.getJSON(
        `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=GcbW6tsU7sr1adidcqfTOzJOuNt1kwBv`
      ).done(function(data) {
        $.each(data.results, function(index, value) {
          const $media = $(value.multimedia[2]);

          const $mediaArray = $.map($media[0], function(value, index) {
            return [value];
          });

          if (typeof $mediaArray[0] === "undefined") {
            JSON.parse(JSON.stringify($mediaArray));
            return
          }

          console.log($mediaArray[0]);

          $("#top-stories").append(` <div>
                                      <img class="image" src="${$mediaArray[0]}"/>
                                     </div>`);

          return index < 11;
        });
      });
    });
  });
});
