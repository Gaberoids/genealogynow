$(document).ready(function () {
   
//    logic that controls the images on the WHO question section
    $(".smallImg1").on("click", function() {
        
        var smallImg = $(this).attr("src");
        var mainImg = $("#mainImg1").attr("src");

            // swap the big img to the smaller img
        if (mainImg !== smallImg) {
            $("#mainImg1").attr("src", smallImg);
            $(this).attr("src", mainImg);
        }
        else {
            console.log("main equal to small" + "smallImg = " + smallImg + "///////" + "mainImg = " + mainImg);
        }
    });

    //    logic that controls the images on the WHERE question section
    $(".smallImg2").on("click", function() {
        
        var smallImg = $(this).attr("src");
        var mainImg = $("#mainImg2").attr("src");

            // swap the big img to the smaller img
        if (mainImg !== smallImg) {
            $("#mainImg2").attr("src", smallImg);
            $(this).attr("src", mainImg);
        }
        else {
            console.log("main equal to small" + "smallImg = " + smallImg + "///////" + "mainImg = " + mainImg);
        }
    });


        //    logic that controls the images on the HOW question section
    $(".smallImg3").on("click", function() {
        
        var smallImg = $(this).attr("src");
        var mainImg = $("#mainImg3").attr("src");

            // swap the big img to the smaller img
        if (mainImg !== smallImg) {
            $("#mainImg3").attr("src", smallImg);
            $(this).attr("src", mainImg);
        }
        else {
            console.log("main equal to small" + "smallImg = " + smallImg + "///////" + "mainImg = " + mainImg);
        }
    });
});
