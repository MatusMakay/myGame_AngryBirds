

window.onload = function ()
{
	//
	//Model my�i od Ing. Peter Kapec, PhD. z PRED
	var mouse = { x: 0, y: 0, pressed: false, selected: false }
	//
	var gameApp = new app(document.getElementById("canvas"), mouse)
	gameApp.start()
	gameApp.startScreen()
	gameApp.loop()
}
