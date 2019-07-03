$(document).ready(function () {
    let i = 0;
    const images = $(".background-inner");

    const changeImage = () => {
        i++;
        images[i].classList.toggle("display");
        if (i === 0) {
            images[2].classList.remove("display");
        } else {
            images[i - 1].classList.remove("display");
        }
        if (i === images.length - 1) {
            i = -1;
        }
    }
    setInterval(changeImage, 4000);


    const showHeaderContent = () => {
        $('.container-inner-content').addClass('show');
    }

    setTimeout(showHeaderContent, 1000)

    $('.nav-link').click(function() {
        const sectionTo = $(this).attr('href');
        const navHeight = $('.navbar').height();
        console.log(navHeight)
        console.log($(sectionTo).offset().top)
        $('html, body').animate({
            scrollTop: $(sectionTo).offset().top - navHeight
        }, 1500);
    });

    $('.btn-primary').click(function() {
        const sectionTo = '#'+$(this).attr('data-scroll');
        const navHeight = $('.navbar').height();
        console.log($(sectionTo).offset().top)
        $('html, body').animate({
            scrollTop: $(sectionTo).offset().top - navHeight
        }, 1500);
    });

    $(document).scroll(function() {
        const scrollValue = $(this).scrollTop();
        const aboutSection = $("#about").offset().top / 2;
        const contactSection = $("#contact").offset().top * 0.75;
        if(scrollValue >= aboutSection) {
            $('#about .container').addClass("show");
            $('#contact .col').removeClass("show")
        }
        if(scrollValue >= contactSection) {
            $('#contact .col').addClass("show");
            $('#about .container').removeClass("show");
        }
    })

})


