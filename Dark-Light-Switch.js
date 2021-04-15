 //switcher
 //requires js.cookie.min.js and jquery 3.4.1
 //for halfmoon css
$('button#themer').click(switchingMode);

function switchingMode(){
	var chosenMode = Cookies.get('halfmoon_preferredMode')
	console.log(chosenMode)
	
	if (chosenMode == "dark-mode"){
		$('div#main-content').addClass('dark-wall')
        $('div#main-content').removeClass('light-wall')
	} else {
		if (chosenMode == "light-mode") {
			$('div#main-content').addClass('light-wall')
			$('div#main-content').removeClass('dark-wall')
		}
	}
}