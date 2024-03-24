document.addEventListener("DOMContentLoaded", function() {
    const welcomeText = document.querySelector(".welcome-text");
    const Header = document.querySelector(".Header");
    const Box = document.querySelectorAll(".box");
    const Above = document.querySelectorAll(".above");
    const Filler = document.querySelector(".filler");
    const Ctop = document.querySelector(".clipped");

    setTimeout(function() {
        welcomeText.style.opacity = "1";
        Header.style.transform = "translateY(30px)";
        Box.forEach(box => {
            box.style.transform = "translateY(40px)";
        });
        Above.forEach(above => {
            above.style.transform = "translateY(40px)";
        });

    }, 200);

    setTimeout(function() {
        welcomeText.style.opacity = "0";
        welcomeText.style.transform = "translateY(-30px)";

    }, 2000);

    setTimeout(function() {
        Header.style.opacity = 1;
        Header.style.transform = "translateY(-0px)";
        Box.forEach(box => {    
            box.style.opacity = 1;
            box.style.transform = "translateY(-0px)";
        });
        Above.forEach(above => {
            above.style.opacity = 1;
            above.style.transform = "translateY(-0px)";
        });
    }, 2200);

    var orgheight = getComputedStyle(Filler).height;

    setTimeout(function() {
        window.addEventListener("scroll", function() {
            const scroll=window.scrollY > 1;
            Header.classList.toggle("scrolled", scroll);
            if (scroll) {
                Header.style.transform = "translateY(-70px)"
                Header.style.opacity = 0;
                Header.style.transition = "opacity 0.2s ease-in-out, transform 0.7s cubic-bezier(0.210, 0.000, 0.000, 1.000)";
                Ctop.style.transform = "translateY(-50px)";
                Filler.style.height = "50px";
            }
            else {
                Header.style.transform = "translateY(0px)"
                Ctop.style.transform = "translateY(0px)"
                Filler.style.height = orgheight;
                setTimeout(function() {
                    Header.style.opacity = 1;                    
                },200);
            }
        });
    }, 2200);

});

