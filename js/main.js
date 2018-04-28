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
    
    // Change menu button class to "active" depending on where user is located on the page
    $(window).scroll(function() {
        var windowTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        var documentHeight = $(document).height();
        var navHeight = $("nav").height();
        var bottomOfPage = windowHeight + windowTop;
        var aboutLoc = $(".about-section").offset();
        var projectsLoc = $(".projects").offset();
        var contactLoc = $(".contact").offset();
        console.log(documentHeight);
        if (windowTop >= 0 && windowTop < projectsLoc.top - 100) {
            $("#about-button").addClass("menu-active").siblings().removeClass("menu-active");
        } else if (bottomOfPage > documentHeight - 100) {
            $("#contact-button").addClass("menu-active").siblings().removeClass("menu-active");
        } else if (windowTop >= projectsLoc.top && windowTop < contactLoc.top) {
            $("#projects-button").addClass("menu-active").siblings().removeClass("menu-active");
        }
    });

    // Pull out mobile menu when menu button is clicked
    $(".mobile-menu").click(function() {
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

    // Clicking on project image should follow layered text's href
    $(".project-image").click(function() {
        var projectLink = $(this).next();
        window.open(projectLink.attr("href"));
    });

});
