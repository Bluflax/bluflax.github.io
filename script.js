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

    setTimeout(function() {
        window.addEventListener("scroll", function() {
            const scroll=window.scrollY > 10;
            Header.classList.toggle("scrolled", scroll);
            if (scroll) {
                Header.style.transform = "translateY(-40px) scale(0.7)"
            }
            else {
                Header.style.transform = "translateY(0px) scale(1)"
            }
        });
    }, 2200);

});

