document.addEventListener("DOMContentLoaded", function() {
    const welcomeText = document.querySelector(".welcome-text");
    const main = document.querySelector(".main");
    const Header = document.querySelector(".Header");
    const Box = document.querySelectorAll(".box");
    const Box2 = document.getElementById("box2");
    const Above = document.querySelectorAll(".above");
    const Filler = document.querySelector(".filler");
    const Ctop = document.querySelector(".clipped");
    const toady = new Date();
    const GK = new Date(toady.getFullYear(), 5, 11);
    const timebtwnG = GK.getTime() - toady.getTime();
    const daysbtwnG = Math.ceil(timebtwnG / (1000 * 3600 * 24));
    const countdwnfinalG = document.getElementById("s1");
    countdwnfinalG.textContent = daysbtwnG + " Days";

    const inputs = document.querySelectorAll('.digits input');
    const Lastinput = document.querySelector(".lastinput");

    document.body.style.overflowY = "hidden";

    main.style.opacity = 0.3;

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


    inputs.forEach((input, index) => {
    input.addEventListener('input', (event) => {
        const value = event.target.value;
        const nextInput = inputs[index + 1];
        const previousInput = inputs[index - 1];


        if (value === '' && event.inputType === 'deleteContentBackward') {
        if (previousInput) {
            previousInput.focus();
            previousInput.value = ''; 
        }
        } else {
        if (nextInput) {
            nextInput.focus();
        }
        }
    });
    });

    inputs[5].addEventListener('input', (event) => {
    const passcode = Array.from(inputs).map(input => input.value).join('');
    
    if (passcode === '352636') {
//--------------------------------------------------------------------------------

        Lastinput.blur();

        window.scrollTo({
            top:0,
            behaviou: 'auto'
        })

        document.body.style.overflowY = "auto";

        setTimeout(function() {
            welcomeText.style.opacity = "0";
            welcomeText.style.transform = "translateY(-30px)";
            welcomeText.style.zIndex = '0';

        }, 100);

        setTimeout(function() {
            main.style.filter = "blur(0px)";
            main.style.opacity = 1;
            Header.style.transform = "translateY(-0px)";
            Box.forEach(box => {    
                box.style.transform = "translateY(-0px)";
            });
            Above.forEach(above => {
                above.style.transform = "translateY(-0px)";
            });
        }, 300);

        var orgheight = getComputedStyle(Filler).height;

        setTimeout(function() {
            window.addEventListener("scroll", function() {
                const scroll=window.scrollY > 1;
                Header.classList.toggle("scrolled", scroll);
                if (scroll) {
                    Header.style.transform = "translateY(-70px)"
                    Header.style.opacity = 0;
                    Header.style.filter = "blur(20px)";
                    setTimeout(function() {
                        Header.style.filter = "blur(0px)";                 
                    },200);
                    Header.style.transition = "opacity 0.2s ease-in-out, transform 0.7s cubic-bezier(0.210, 0.000, 0.000, 1.000), filter 0.4s ease-in-out";
                    Ctop.style.transform = "translateY(-50px)";
                    Filler.style.height = "60px";
                    Box2.style.filter = "blur(0px)";
                    Box2.style.opacity = 1;
                }
                else {
                    Header.style.transform = "translateY(0px)"
                    setTimeout(function() {
                        Header.style.opacity = 1;                    
                    },200);
                    Ctop.style.transform = "translateY(0px)"
                    Filler.style.height = orgheight;
                    this.setTimeout(function() {
                        Box2.style.filter = "blur(20px)";
                        Box2.style.opacity = 0.2;
                    },300)
                }
            });
        }, 300);

//--------------------------------------------------------------------------------
    } else {
        inputs.forEach((input, index) => {
        input.value = '';
        input.style.borderColor = 'var(--notice-color)';
        if (index === 0) {
            input.focus();
        }
        setTimeout(() => {
            input.style.borderColor = 'var(--shadow-colorsubtle)';
        }, 150);
        });
    }
    });

//-------------------------------------------------------------------------------


   

});

