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

function prev() {
    sliderNew = sliderCurrent - 1;
    showDiapo(sliderNew);
}

function next() {
    sliderNew = sliderCurrent + 1;
    showDiapo(sliderNew);
}

function showDiapo(id) {
    stopLoop();
    if (id > count) {
        id = 1;
    } else if (id < 1) {
        id = count;
    }  
    $("#slider>img").fadeOut(300);
    $("#slider>img#"+id).fadeIn(300);
    sliderCurrent = id;
    sliderNext = id + 1;
    startDiaporama();
}

function stopLoop() {
    window.clearInterval(loop);
}

$("#slider>img").hover(
    function() { 
        stopLoop(); 
    } ,
    function() { 
        startDiaporama(); 
    }
);



