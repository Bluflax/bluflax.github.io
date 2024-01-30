document.addEventListener("DOMContentLoaded", function() {
    const welcomeText = document.querySelector(".welcome-text");
    const Header = document.querySelector(".Header");
    const Block = document.querySelector(".block");


    setTimeout(function() {
        welcomeText.style.opacity = "1";
        Header.style.transform = "translateY(30px)";
        Block.style.transform = "translateY(30px)";

    }, 200);

    setTimeout(function() {
        welcomeText.style.opacity = "0";
        welcomeText.style.transform = "translateY(-30px)";

    }, 2000);

    setTimeout(function() {
        Header.style.opacity = 1;
        Block.style.opacity = 1;
        Header.style.transform = "translateY(-0px)";
        Block.style.transform = "translateY(-0px)";
    }, 2200);
});