sliderCurrent = 1;
sliderNext = 2;
count = 0;

$(document).ready(function(){
    count = $("#slider>img").size();
    $("#slider>img#1").fadeIn(300);
    startDiaporama();
}); 

function startDiaporama() {
   
    loop = setInterval(function(){
        if (sliderNext > count) {
            sliderNext = 1;
            sliderCurrent = 1;
        }   
        $("#slider>img").fadeOut(300);
        $("#slider>img#"+sliderNext).fadeIn(300);
        sliderCurrent = sliderNext;
        sliderNext += 1;
    },3000)
}


