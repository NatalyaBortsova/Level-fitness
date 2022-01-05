$(function () {

    $(".menu__content-link, .burger__menu-link").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });


    $('.burger').on('click', function () {
        $('.burger__menu').addClass('active');
        $('body').addClass('lock');
        $('.burger__menu-btn, .burger__menu-connect__link, .burger__menu-link, .address__link').on('click', function () {
            $('.burger__menu').removeClass('active');
            $('body').removeClass('lock');
        });
    });

    var $overlay = $('.overlay'),
        $overlayTrigger = $('.menu__content-button'),
        $overlayClose = $('.record-form__button, .trainers__registration-button'),
        openClass = 'is-open';

    $overlayTrigger.on('click', function () {
        var num = ('0' + ($(this).index() + 1)).slice(-2);
        $('.overlay').addClass(openClass);
        $overlayClose.addClass(openClass);
    });

    $overlayClose.on('click', function () {
        $overlayClose.removeClass(openClass);
        $overlay.removeClass(openClass);
    });


    const scrollBtn = document.querySelector('.scroll-top');
    window.onscroll = () => {
        if (window.scrollY > 1500) {
            scrollBtn.classList.remove('_hide');
        } else if (window.scrollY < 1500) {
            scrollBtn.classList.add('_hide');
        }
    };

    scrollBtn.onclick = () => {
        window.scrollTo(0, 0);
    };

    const swiper = new Swiper('.slider-top', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });


    $('.programs__item').slice(0, 6).show();
    $('.programs__load').on('click', function () {
        $('.programs__item:hidden').slice(0, 3).slideDown();
    });


    var selector = document.getElementById('#phone');
    var im = new Inputmask("+38(999)-999-99-99");
    im.mask('#phone');


    $('.menu__content-button, .programs__button, .form-registration__button').on('click', function () {
        $('.record-form').addClass('active');
    });

    $('.record-form__button').on('click', function () {
        $('.record-form').removeClass('active');
    });


    let reg = /[A-Za-zA-Яа-яЁё]/;
    let inp = document.querySelector('#name');
    let span = document.querySelector('.span');

    document.querySelector('.trainers__registration-button').onclick = function (e) {

        if (!validate(reg, inp.value)) {
            notValid(inp, span, '!Введите, пожалуйста, корректное имя');
        } else {
            valid(inp, span, '');
        }
    };

    function validate(regex, inp) {
        return regex.test(inp);
    }

    function notValid(inp, el, mess) {
        inp.classList.add('is-invalid');
        el.innerHTML = mess;
    }

    function valid(inp, el, mess) {
        inp.classList.remove('is-invalid');
        inp.classList.add('is-valid');
        el.innerHTML = mess;
    }

    $('.trainers__registration-button').on('click', function () {
        $('.record-form').addClass('close');
    });

    $('.programs__button, .form-registration__button').on('click', function (event) {
        var target = $('.record-form');
        $('html, body').animate({
            scrollTop: top
        }, 1500);
    });




    const slider = document.querySelector('.trainers__slider');

    let mySwiper;

    function mobileSlider() {
        if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {
            mySwiper = new Swiper(slider, {
                slidesPerView: 2.5,
                loop: true,
                slideClass: 'swiper-slide',
                pagination: {
                    el: '.swiper-pagination',
                },
            });

            slider.dataset.mobile = 'true';

        }

        if (window.innerWidth > 768) {
            slider.dataset.mobile = 'false';
            if (slider.classList.contains('swiper-container-initialized')) {
                mySwiper.destroy();
            }
        }

    }

    mobileSlider()

    window.addEventListener('resize', () => {
        mobileSlider();
    });


    const animItems = document.querySelectorAll(`._anim-items`)
    if (animItems.length > 0) {
        window.addEventListener(`scroll`, animOnScroll)

        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffSet = offset(animItem).top;
                const animStart = 4;
                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }
                if ((pageYOffset > animItemOffSet - animItemPoint) && pageYOffset < (animItemOffSet + animItemHeight)) {
                    animItem.classList.add(`_active`);
                } else {
                    if(animItem.classList.contains('_anim-no-hide')){
                        animItem.classList.remove(`_active`);
                    };                    
                }
            }
        }

    function offset(el) {
        const rect = el.getBoundingClientRect()
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft
        }
    }

    setTimeout(() => {
        animOnScroll()
    }, 300)
}


});