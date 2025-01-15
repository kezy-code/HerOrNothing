let input = $("#name");
let coeur = $(".coeur");
let fuck = $(".fuck");
let audio = new Audio('son.mp3'); // Add the path to your audio file
let audio_love = new Audio('son2.mp3');

let inputval = input.val()
inputval = " "

function flashEffect() {
    let colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"];
    let index = 0;
    let flashInterval = setInterval(function() {
        $("body").css("background-color", colors[index]);
        index = (index + 1) % colors.length;
    }, 100); // Change color every 100ms

    setTimeout(function() {
        clearInterval(flashInterval);
        $("body").css("background-color", ""); // Reset to original background color
        fuck.addClass("animated zoomOutDown"); // Add the animation class to hide the element
        setTimeout(function() {
            fuck.hide(); // Hide the element after the animation
            location.reload(); // Reload the page
        }, 1000); // Duration of the animation
    }, 9000); // Flash effect lasts for 11 seconds
}

function loveBackgroundEffect() {
    let colors = ["#FF69B4", "#FF1493"]; // Pink and DeepPink colors
    let index = 0;
    let loveInterval = setInterval(function() {
        $("body").css("transition", "background-color 2s");
        $("body").css("background-color", colors[index]);
        index = (index + 1) % colors.length;
    }, 2000); // Change color every 2 seconds

    setTimeout(function() {
        clearInterval(loveInterval);
        $("body").css("background-color", ""); // Reset to original background color
        location.reload(); // Reload the page
    }, 10000); // Effect lasts for 10 seconds
}

$("#formUser").on("submit", function(e) {
    e.preventDefault();
    let inputValue = input.val().toLowerCase();
    let emilieRegex = /^(emilie|émilie)$/i;
    if (emilieRegex.test(inputValue)) {
        loveBackgroundEffect(); // Trigger the love background effect
        let interval = setInterval(function() {
            let newHeart = coeur.clone().appendTo('body');
            let startLeft = Math.random() * $(window).width();
            let endLeft = Math.random() * $(window).width();
            newHeart.css({
                position: 'absolute',
                bottom: 0,
                left: startLeft,
                width: '300px', // Adjust the width
                height: '300px' // Adjust the height
            });
            audio_love.play()
            newHeart.show().addClass("animated");
            newHeart.animate({
                bottom: $(window).height(),
                left: endLeft
            }, 10000, function() {
                $(this).remove();
            });
        }, 200);

        setTimeout(function() {
            clearInterval(interval);
            location.reload(); // Reload the page
        }, 10000);
    } else {
        fuck.show();
        fuck.addClass("animated zoomInUp");
        audio.play(); // Play the sound
        setTimeout(flashEffect, 2000); // Trigger the flash effect after 2 seconds
    }
});