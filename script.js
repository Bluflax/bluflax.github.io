document.addEventListener("DOMContentLoaded", function() {
    const welcomeText = document.querySelector(".welcome-text");
    const main = document.querySelector(".main");
    const Header = document.querySelector(".Header");
    const Box = document.querySelectorAll(".box");
    const Box2 = document.getElementById("box2");
    const Above = document.querySelectorAll(".above");
    const Filler = document.querySelector(".filler");
    const Salert = document.getElementById('showsensitive');
    const Noaccess = document.querySelectorAll('.noaccess');
    const f3 = document.getElementById('f3');
    const pannelfloat = document.querySelector('.pannelfloat');

    const toady = new Date();
    const GK = new Date(toady.getFullYear(), 5, 11);
    const timebtwnG = GK.getTime() - toady.getTime();
    const daysbtwnG = Math.ceil(timebtwnG / (1000 * 3600 * 24));
    const countdwnfinalG = document.getElementById("s1");
    countdwnfinalG.textContent = daysbtwnG + " Days";
    var img3 = this.getElementById('imgblk3');
    var src3 = img3.getAttribute('data-src');
    var img4 = this.getElementById('imgblk4');
    var src4 = img4.getAttribute('data-src');
    var img5 = this.getElementById('imgblk5');
    var src5 = img5.getAttribute('data-src');
    var img7 = this.getElementById('imgblk7');
    var src7 = img7.getAttribute('data-src');
    var img8 = this.getElementById('imgblk8');
    var src8 = img8.getAttribute('data-src');

        function imgloaded() {
            img3.setAttribute('src', src3);
            img3.removeAttribute('data-src');
            img4.setAttribute('src', src4);
            img4.removeAttribute('data-src');
            img5.setAttribute('src', src5);
            img5.removeAttribute('data-src');
            img7.setAttribute('src', src7);
            img7.removeAttribute('data-src');
            img8.setAttribute('src', src8);
            img8.removeAttribute('data-src');
        };

    const inputs = document.querySelectorAll('.digits input');
    const Lastinput = document.querySelector(".lastinput");

    document.body.style.overflowY = "hidden";

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
            const previousInput = inputs[index - 1];

            if (value === '' && event.inputType === 'deleteContentBackward') {
                if (previousInput) {
                    previousInput.focus();
                }
            }
        });
    });

    inputs.forEach(input => {
        input.addEventListener('keydown', function(event) {
            if (event.key === 'Backspace' && this.value === '') {
                const currentInput = event.target;
                const previousInput = currentInput.previousElementSibling;
                if (previousInput) {
                    previousInput.focus();
                }
            }
        });
    });

    inputs[1].addEventListener('input', (event) => {
        const value = event.target.value;
        if (value === '' && event.inputType === 'deleteContentBackward') {
            inputs.forEach(input =>{
                input.value = '';
            })
        }
    })

    inputs[5].addEventListener('input', (event) => {
        const passcode = Array.from(inputs).map(input => input.value).join('');

        const digits = passcode.split('').map(Number);
        const sumall = digits.reduce((acc, curr) => acc + curr, 0);

        
        if (sumall === 25) {
    //--------------------------------------------------------------------------------

                Lastinput.blur();

                main.style.display = 'block';


                window.scrollTo({
                    top:0,
                    behaviour: 'auto'
                });

                document.body.style.overflowY = "auto";


                setTimeout(function() {
                    welcomeText.style.opacity = "0";
                    welcomeText.style.transform = "translateY(-30px)";
                    welcomeText.style.zIndex = '0';

                }, 100);
                


                setTimeout(function() {
                    welcomeText.style.display = 'none';
                    main.style.filter = "blur(0px)";
                    main.style.opacity = 1;
                    Header.style.transform = "translateY(-0px)";
                    Box.forEach(box => {    
                        box.style.transform = "translateY(-0px)";
                    });
                    Above.forEach(above => {
                        above.style.transform = "translateY(-0px)";
                    });
                    pannelfloat.style.display = 'block';
                    pannelfloat.style.opacity = 1;
                    //betacheck.checked = true;
                    var event = new Event('change');
                    betacheck.dispatchEvent(event);
                }, 200);

                var betacheck = document.querySelector('#betacheck');
                betacheck.addEventListener('change', function() {
                    if (betacheck.checked) {
                        Header.classList.add('beta');
                        Above.forEach(above => {
                            above.classList.add('beta');
                        });
                        Filler.classList.add('beta');
                        f3.classList.add('beta');
                        window.scrollTo({
                            top:0
                        });
                    } else {
                        Header.classList.remove('beta');
                        Above.forEach(above => {
                            above.classList.remove('beta');
                        });
                        Filler.classList.remove('beta'); 
                        f3.classList.remove('beta');
                        window.scrollTo({
                            top:0
                        });
                    }
                });
                
                var orgheight = getComputedStyle(Filler).height;

                if (passcode === '352636'){
                    imgloaded();
                    Salert.style.display = 'flex';
                    Noaccess.forEach(noaccess => {
                        noaccess.style.display = 'none';
                    });
                    Box2.style.display = 'flex';
                    Salert.addEventListener('click', function() {
                        window.scrollBy(0, 1);
                    });
                };

                setTimeout(function() {
                    window.addEventListener("scroll", function() {
                        const scroll=window.scrollY > 0;
                        if (scroll) {
                            var orgheight3 = getComputedStyle(f3).height;
                            Salert.style.opacity = 0;
                            Salert.style.filter = "blur(10px)";
                            Box2.style.scale = 1;
                            Box2.style.filter = "blur(0px)";
                            Box2.style.opacity = 1;
                            Header.style.transform = "translateY(-70px)"
                            Header.style.opacity = 0;
                            Header.style.filter = "blur(20px)";
                            setTimeout(function() {
                                Header.style.filter = "blur(0px)";                 
                            },200);
                            Header.style.transition = "opacity 0.2s ease-in-out, transform 0.7s cubic-bezier(0.210, 0.000, 0.000, 1.000), filter 0.4s ease-in-out";
                            Filler.style.height = "60px";
                            f3.classList.add('gamma');
                            f3.style.opacity = 0;
                            Filler.style.opacity = 0;
                            setTimeout(function() {
                                Salert.style.display = 'none';
                            }, 200);
                        }
                        else {
                            this.setTimeout(function() {
                                Box2.style.filter = "blur(20px)";
                                Box2.style.opacity = 0.3;
                                Box2.style.scale = 0.95;
                            },300)    
                            Header.style.transform = "translateY(0px)";
                            setTimeout(function() {
                                Header.style.opacity = 1;                    
                            },200);
                            Filler.style.height = orgheight;  
                            f3.classList.remove('gamma');
                            f3.style.opacity = 1;             
                            Filler.style.opacity = 1;
                        }
                    });
                }, 300);


    //--------------------------------------------------------------------------------
        } else if (passcode === 'devmode') {

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

