
$('.books img').click(function() {
    var imgSrc = $(this).attr('src');
    var imgid = $(this).attr('id');
    switchToBookDetails(imgSrc); 
});

function switchToBookDetails(source) {
   $("body").load("main2.html", function() {
       $('#imgDes').attr('src', source);
       
   });
}

var home0 = document.getElementById('homeBtn')


home0.addEventListener('click', function() {
    backHome();
});

function backHome() {
    $("body").load("main3.html");
}
