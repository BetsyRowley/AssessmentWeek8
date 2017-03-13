var buttonCounter = 0;

$(document).ready(function() {

clickGenerate();
swap();
removeAppendage();

});

function createAppendage() {
    $(".container").append("<div class = 'appendage'></div>");
    buttonCounter++;
    $el = $(".container").children().last();
    $el.append("<p>Button Clicked " + buttonCounter +"</p>");
    $el.append("<button class = 'swap'>Swap</button>");
    $el.append("<button class = 'dele'>Delete</button>");
}

function clickGenerate () {
  $(".b").on("click", "#gen", createAppendage);
}

function swap() {
  $(".container").on("click", ".swap", function() {
      $(this).parent().toggleClass("yellow");
  });
}

function removeAppendage() {
  $(".container").on("click", ".dele", function() {
      $(this).parent().remove();
  });
}
