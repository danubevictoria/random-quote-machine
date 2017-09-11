var request = new XMLHttpRequest();
var url =
  "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

request.open(
  "GET",
  url,
  true
);

request.onload = function() {
  var quote = document.getElementById("quote-span");
  var author = document.getElementById("author");
  var data = JSON.parse(this.response);

  console.log(data);

  if (data.length > 0) {
    quote.innerHTML = data[0].content;
    author.textContent = data[0].title;
  }
};

request.send();

// jQuery function on click of new quote button that makes an ajax call
$("#new-quote-button").on("click", function() {
  console.log("clicked");
  $.ajax({
    url: url,
    success: function(data) {
      console.log(data);
      var quote = document.getElementById("quote-span");
      var author = document.getElementById("author");

      if (data.length > 0) {
        quote.innerHTML = data[0].content;
        author.textContent = data[0].title;
      }
    },
    cache: false
  });
});
