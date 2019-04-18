$('#landing-button').on('click', function() {
    const images = $('#start-gallery').position().top;
    $('html, body').animate({
        scrollTop: images
    }, 500);
});