$(document).ready(function() {

    // Make navigation menu fixed if scrolled past header
    $(window).scroll(function() {
        var windowTop = $(window).scrollTop();
        var headerHeight = $("header").height();
        if (windowTop > headerHeight) {
            $("nav").addClass("fixed-header");
        }
        else {
            $("nav").removeClass("fixed-header");
        }
    });

    // Pull out mobile menu when menu button is clicked
    $(".hamburger").click(function() {
        $(".menu-list").toggleClass("active");
    });

    // Close mobile menu when item is clicked
    $(".menu-button").click(function() {
        $(".menu-list").removeClass("active");
    });

    // Make project image "hover" when text is hovered
    $(".project-text").hover(function() {
        $(this).prev().toggleClass("hoverImage");
    });

    // Clicking on project image should follow layer'd text's href
    $(".project-image").click(function() {
        var projectLink = $(this).next();
        window.open(projectLink.attr("href"));
    });

});
