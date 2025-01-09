$("body").keypress(function (event) {
  $(".title").text(event.key);
});

$(".test").on("mouseover", function () {
  $(".test").css("color", "red");
});
