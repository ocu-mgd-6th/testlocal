$(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 10) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });

    $(document).ready(function () {
        var valueOnLoad = "animation";
        $(".filter").not('.' + valueOnLoad).hide('2000');
        $(".filter").not('.' + valueOnLoad).hide('2000');

        $(".filter-button").click(function () {
            var value = $(this).attr('data-filter');
            $(".filter").not('.' + value).hide('2000')
            $('.filter').filter('.' + value).show('2000')

        });

    });


    var elems = document.getElementsByClassName("seatButton");
    for (var i = 0; i < elems.length; i++) {
        elems[i].onclick = function () {
            var color = window.getComputedStyle(this, null)
                .getPropertyValue("background-color");
            this.style.backgroundColor = color === "rgb(255, 255, 0)" ?
                "rgb(255, 165, 0)" : "rgb(255, 255, 0)";
        };
    };


    $('div[type="button"]').click(function () {
        $('#mainvisual').toggleClass('night');
    })



});