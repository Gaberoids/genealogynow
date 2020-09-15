
// This page is to work with test jquerytest.html

$(document).ready(function () {
   
//    logic that controls the images on the WHO question section
    $(".smallImg1").on("click", function() {
console.log("hello world from jquery CODE");
        
        var smallImg = $(this).attr("src");
        console.log("this is SMALL IMG: " + smallImg);

        var mainImg = $("#mainImg1").attr("src");
        console.log("This is the MAIN IMG: " + mainImg);

            // have main img src substituted by smallImg src
        if (mainImg !== smallImg) {
            console.log("main not equal to small" + "smallImg = " + smallImg + "///////" + "mainImg = " + mainImg);
            $("#mainImg1").attr("src", smallImg);
            $(this).attr("src", mainImg);
        }
        else {
            console.log("main equal to small" + "smallImg = " + smallImg + "///////" + "mainImg = " + mainImg);
        }
    })

    //    logic that controls the images on the WHERE question section
    $(".smallImg2").on("click", function() {
console.log("hello world from jquery CODE");
        
        var smallImg = $(this).attr("src");
        console.log("this is SMALL IMG: " + smallImg);

        var mainImg = $("#mainImg2").attr("src");
        console.log("This is the MAIN IMG: " + mainImg);

            // have main img src substituted by smallImg src
        if (mainImg !== smallImg) {
            console.log("main not equal to small" + "smallImg = " + smallImg + "///////" + "mainImg = " + mainImg);
            $("#mainImg2").attr("src", smallImg);
            $(this).attr("src", mainImg);
        }
        else {
            console.log("main equal to small" + "smallImg = " + smallImg + "///////" + "mainImg = " + mainImg);
        }
    })


        //    logic that controls the images on the HOW question section
    $(".smallImg3").on("click", function() {
console.log("hello world from jquery CODE");
        
        var smallImg = $(this).attr("src");
        console.log("this is SMALL IMG: " + smallImg);

        var mainImg = $("#mainImg3").attr("src");
        console.log("This is the MAIN IMG: " + mainImg);

            // have main img src substituted by smallImg src
        if (mainImg !== smallImg) {
            console.log("main not equal to small" + "smallImg = " + smallImg + "///////" + "mainImg = " + mainImg);
            $("#mainImg3").attr("src", smallImg);
            $(this).attr("src", mainImg);
        }
        else {
            console.log("main equal to small" + "smallImg = " + smallImg + "///////" + "mainImg = " + mainImg);
        }
    })
})


// $(document).ready(function(){
//     $(".box").on("click", function() {
//         var classNames = $(this).attr("class").split(" ");
//         var boxClass = classNames[0];
//         var className = classNames[1];
//         if ($("." + className).css("background-color") == "rgb(255, 0, 0)") {
//             $("." + className).css("background-color", "#000");
//         }
//         else {
//             $("." + boxClass).css("background-color", "#000");
//             $("." + className).css("background-color", "red");
//         };
//     });
// });