
//JQUERY($).METHOD(attr, new);


// adding an event listener
// $("h1").click(function(){
//     $("h1").css("color", "purple");
// });

// $("button").click(function() {
//     $("h1").css("color", "purple");
// });


// // Key press added to input
// $("input").keypress(function(event) {
//     console.log(event.key);
// });

// // Key press event listener added to body
// $(document).keypress(function(event){
//     console.log(event.key);
//     $("h1").text(event.key);
// });


// // Key event "ON"
// $("h1").on("mouseover", function() {
//         $("h1").css("color", "purple")
// });


// TOGGLE - make each button toggle between hide and display
// $("button").on("click", function(){
//     // $("h1").toggle();
//     // $("h1").fadeToggle();
//     $("h1").slideToggle();

// })


// ANIMATE
$("button").on("click", function(){
    // $("h1").animate({opacity: 0.5});
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});

