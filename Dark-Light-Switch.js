// Startup (Check and Load) Code
var DataTitleSwitchTheme = document.getElementById('SwitchWithLabel')
var isCheckTheme = window.localStorage.getItem("mode")
if (isCheckTheme == "dark") {
    $('body').addClass('dark')
    if ($('body').hasClass('dark')) {
        // remove light to enable dark
        $('body').removeClass('light')
        $('nav').removeClass('navbar-light')
        $('nav').removeClass('bg-light')
        $('i').removeClass('i-light')
        $('div #about-intro').removeClass('about-content-light')
        $('i.theme-switch').removeClass('fa-sun-o')
        $('#preloader').removeClass('loader_bg_light')
        $('#gh-repos').removeClass('bg-light')
        // now that light has been remove let's enable dark
        $('nav').addClass('navbar-dark')
        $('nav').addClass('bg-dark')
        $('div #about-intro').addClass('about-content')
        $('i.theme-switch').addClass('fa-moon-o')
        $('#preloader').addClass('loader_bg_dark')
        $('#gh-repos').addClass('bg-dark')
        DataTitleSwitchTheme.dataset.title = "Change theme to light"
        // settings on next load be saved
        window.localStorage.removeItem("mode")
        window.localStorage.setItem("mode", "dark")
    }
} else {
    if (isCheckTheme = "light") {
        $('body').addClass('light')
        if ($('body').hasClass('light')) {
            // remove dark to enable light
            $('nav').removeClass('navbar-dark')
            $('nav').removeClass('bg-dark')
            $('div #about-intro').removeClass('about-content')
            $('i.theme-switch').removeClass('fa-moon-o')
            $('#preloader').removeClass('loader_bg_dark')
            $('#gh-repos').removeClass('bg-dark')
            // now that dark has been remove let's enable light
            $('body').addClass('light')
            $('nav').addClass('navbar-light')
            $('nav').addClass('bg-light')
            $('i').addClass('i-light')
            $('div #about-intro').addClass('about-content-light')
            $('i.theme-switch').addClass('fa-sun-o')
            $('#preloader').addClass('loader_bg_light')
            $('#gh-repos').addClass('bg-light')
            DataTitleSwitchTheme.dataset.title = "Change theme to dark"
            // settings on next load be saved
            window.localStorage.removeItem("mode")
            window.localStorage.setItem("mode", "light")
        }
    }
}

// Switch Code
$('a.themer').click(switchingTheme);

function switchingTheme() {
    location.reload();
    $('nav').toggleClass('navbar-dark')
    $('nav').toggleClass('navbar-light')
    $('nav').toggleClass('bg-dark')
    $('nav').toggleClass('bg-light')
    $('i').toggleClass('i-light')
    $('div #about-intro').toggleClass('about-content')
    $('div #about-intro').toggleClass('about-content-light')
    $('i.theme-switch').toggleClass('fa-moon-o')
    $('i.theme-switch').toggleClass('fa-sun-o')
    $('#gh-repos').toggleClass('bg-dark')
    $('#gh-repos').toggleClass('bg-light')
    // Loader
    $('#preloader').toggleClass('loader_bg_dark')
    $('#preloader').toggleClass('loader_bg_light')
    // default is dark
    // First config will be dark to light then save (and vice versa)
    if (isCheckTheme == "dark") {
        localStorage.removeItem("mode")
        localStorage.setItem("mode", "light")
    } else {
        localStorage.removeItem("mode")
        localStorage.setItem("mode", "dark")
    }
}