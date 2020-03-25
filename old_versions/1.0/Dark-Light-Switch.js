// Dark/Light Switch JS script by EmanDev (Eman Marcaida)
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
        // Cards
        $('#cardProperty1').removeClass('bg-dark-06dp') // for counter-measures
        $('#cardTextProperty1').removeClass('text-black')
        $('#cardTextProperty2').removeClass('text-black')
        $('#cardProperty2').removeClass('bg-dark-06dp') // for counter-measures
        $('#cardTextProperty3').removeClass('text-black')
        $('#cardTextProperty4').removeClass('text-black')
        $('#cardProperty3').removeClass('bg-dark-06dp') // for counter-measures
        $('#cardTextProperty5').removeClass('text-black')
        $('#cardTextProperty6').removeClass('text-black')
        $('#cardProperty4').removeClass('bg-dark-06dp') // for counter-measures
        $('#cardTextProperty7').removeClass('text-black')
        $('#cardTextProperty8').removeClass('text-black')
        $('#cardProperty5').removeClass('bg-dark-06dp') // for counter-measures
        $('#cardTextProperty9').removeClass('text-black')
        $('#cardTextProperty10').removeClass('text-black')
        $('#cardProperty6').removeClass('bg-dark-06dp') // for counter-measures
        $('#cardTextProperty11').removeClass('text-black')
        $('#cardTextProperty12').removeClass('text-black')
        // now that light has been remove let's enable dark
        $('nav').addClass('navbar-dark')
        $('nav').addClass('bg-dark')
        $('div #about-intro').addClass('about-content')
        $('i.theme-switch').addClass('fa-moon-o')
        $('#preloader').addClass('loader_bg_dark')
        $('#gh-repos').addClass('bg-dark-02dp')
        DataTitleSwitchTheme.dataset.title = "Change theme to light"
        document.getElementById("gh-repo-theme1").href = "img/gh-repos-dark.jpg"
        document.getElementById("gh-repo-theme2").src = "img/gh-repos-dark.jpg"
        document.getElementById("csssl-theme1").href = "img/csssl-dark.png"
        document.getElementById("csssl-theme2").src = "img/csssl-dark.png"
        // Cards
        $('#cardProperty1').addClass('bg-dark-06dp')
        $('#cardTextProperty1').addClass('text-white')
        $('#cardTextProperty2').addClass('text-white')
        $('#cardProperty2').addClass('bg-dark-06dp')
        $('#cardTextProperty3').addClass('text-white')
        $('#cardTextProperty4').addClass('text-white')
        $('#cardProperty3').addClass('bg-dark-06dp')
        $('#cardTextProperty5').addClass('text-white')
        $('#cardTextProperty6').addClass('text-white')
        $('#cardProperty4').addClass('bg-dark-06dp')
        $('#cardTextProperty7').addClass('text-white')
        $('#cardTextProperty8').addClass('text-white')
        $('#cardProperty5').addClass('bg-dark-06dp')
        $('#cardTextProperty9').addClass('text-white')
        $('#cardTextProperty10').addClass('text-white')
        $('#cardProperty6').addClass('bg-dark-06dp')
        $('#cardTextProperty11').addClass('text-white')
        $('#cardTextProperty12').addClass('text-white')
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
            $('#gh-repos').removeClass('bg-dark-02dp')
            // Cards
            $('#cardProperty1').removeClass('bg-dark-06dp')
            $('#cardTextProperty1').removeClass('text-white')
            $('#cardTextProperty2').removeClass('text-white')
            $('#cardProperty2').removeClass('bg-dark-06dp')
            $('#cardTextProperty3').removeClass('text-white')
            $('#cardTextProperty4').removeClass('text-white')
            $('#cardProperty3').removeClass('bg-dark-06dp')
            $('#cardTextProperty5').removeClass('text-white')
            $('#cardTextProperty6').removeClass('text-white')
            $('#cardProperty4').removeClass('bg-dark-06dp')
            $('#cardTextProperty7').removeClass('text-white')
            $('#cardTextProperty8').removeClass('text-white')
            $('#cardProperty5').removeClass('bg-dark-06dp')
            $('#cardTextProperty9').removeClass('text-white')
            $('#cardTextProperty10').removeClass('text-white')
            $('#cardProperty6').removeClass('bg-dark-06dp')
            $('#cardTextProperty11').removeClass('text-white')
            $('#cardTextProperty12').removeClass('text-white')
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
            document.getElementById("gh-repo-theme1").href = "img/gh-repos-light.jpg"
            document.getElementById("gh-repo-theme2").src = "img/gh-repos-light.jpg"
            document.getElementById("csssl-theme1").href = "img/csssl-light.png"
            document.getElementById("csssl-theme2").src = "img/csssl-light.png"
            // Cards
            $('#cardTextProperty1').addClass('text-black')
            $('#cardTextProperty2').addClass('text-black')
            $('#cardTextProperty3').addClass('text-black')
            $('#cardTextProperty4').addClass('text-black')
            $('#cardTextProperty5').addClass('text-black')
            $('#cardTextProperty6').addClass('text-black')
            $('#cardTextProperty7').addClass('text-black')
            $('#cardTextProperty8').addClass('text-black')
            $('#cardTextProperty9').addClass('text-black')
            $('#cardTextProperty10').addClass('text-black')
            $('#cardTextProperty11').addClass('text-black')
            $('#cardTextProperty12').addClass('text-black')
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
    $('#gh-repos').toggleClass('bg-dark-02dp')
    $('#gh-repos').toggleClass('bg-light')
    // Cards
    $('#cardProperty1').toggleClass('bg-dark-06dp')
    $('#cardTextProperty1').toggleClass('text-white')
    $('#cardTextProperty1').toggleClass('text-black')
    $('#cardTextProperty2').toggleClass('text-white')
    $('#cardTextProperty2').toggleClass('text-black')
    $('#cardProperty2').toggleClass('bg-dark-06dp')
    $('#cardTextProperty3').toggleClass('text-white')
    $('#cardTextProperty3').toggleClass('text-black')
    $('#cardTextProperty4').toggleClass('text-white')
    $('#cardTextProperty4').toggleClass('text-black')
    $('#cardProperty3').toggleClass('bg-dark-06dp')
    $('#cardTextProperty5').toggleClass('text-white')
    $('#cardTextProperty5').toggleClass('text-black')
    $('#cardTextProperty6').toggleClass('text-white')
    $('#cardTextProperty6').toggleClass('text-black')
    $('#cardProperty4').toggleClass('bg-dark-06dp')
    $('#cardTextProperty7').toggleClass('text-white')
    $('#cardTextProperty7').toggleClass('text-black')
    $('#cardTextProperty8').toggleClass('text-white')
    $('#cardTextProperty8').toggleClass('text-black')
    $('#cardProperty5').toggleClass('bg-dark-06dp')
    $('#cardTextProperty9').toggleClass('text-white')
    $('#cardTextProperty9').toggleClass('text-black')
    $('#cardTextProperty10').toggleClass('text-white')
    $('#cardTextProperty10').toggleClass('text-black')
    $('#cardProperty6').toggleClass('bg-dark-06dp')
    $('#cardTextProperty11').toggleClass('text-white')
    $('#cardTextProperty11').toggleClass('text-black')
    $('#cardTextProperty12').toggleClass('text-white')
    $('#cardTextProperty12').toggleClass('text-black')
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