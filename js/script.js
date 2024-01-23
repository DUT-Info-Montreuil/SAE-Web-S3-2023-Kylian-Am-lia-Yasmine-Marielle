// Version 1.0 - 2022/12/05 -
// GNU GPL Copyleft 🄯 2022-2032 -
// Initiated by Ismael ARGENCE & Mathéo NGUYEN & Nathan FENOLLOSA

$(document).ready(function(){
    // Gets the video src from the data-src on each button
    console.log("EEEEEEEEEEEEE");
    var $videoSrc;  
    $('.video-btn').click(function() {
        $videoSrc = $(this).data( "src" );
        console.log($videoSrc);
    });
    // when the modal is opened autoplay it  
    $('#modal-video').on('shown.bs.modal', function (e) {  
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
    });
    // stop playing the youtube video when I close the modal
    $('#modal-video').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src',$videoSrc); 
    });
});