var url =
  "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
var colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857"
];

$.ajax({
  url: url,
  success: function(data) {
    // console.log(data);
    var quote_span = document.getElementById("quote-span");
    var author = document.getElementById("author");
    var quote = document.getElementById("quote");

    if (data.length > 0) {
      $("#quote").animate(
        {
          opacity: 0
        },
        500,
        function() {
          $(this).animate(
            {
              opacity: 1
            },
            500
          );
          quote_span.innerHTML = data[0].content;

          author.innerHTML = data[0].title;
        }
      );
    }
  },
  cache: false
});

// jQuery function on click of new quote button that makes an ajax call
function newQuote() {
  $.ajax({
    url: url,
    success: function(data) {
      // console.log(data);
      var quote_span = document.getElementById("quote-span");
      var author = document.getElementById("author");
      var rand = colors[Math.floor(Math.random() * colors.length)];

      if (data.length > 0) {
        $("#quote").animate(
          {
            opacity: 0
          },
          500,
          function() {
            $(this).animate(
              {
                opacity: 1
              },
              500
            );
            quote_span.innerHTML = data[0].content;
            quote_span.style.color = rand;
            author.innerHTML = data[0].title;

            $("body").animate(
              {
                backgroundColor: rand
              },
              500
            );
            console.log("Here");
          }
        );
      }
    },
    cache: false
  });
}

$("#new-quote-button").on("click", newQuote);
document.addEventListener("touchStart", newQuote);
