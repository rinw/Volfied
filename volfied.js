// ****** Game Tasks

// initiem poligonul jocului : [[0, 0], [w, 0], [0, h], [w, h]]
// initiem pozitia playerului : [w/2, h-1]
// miscam playerul pe poligonul jocului 
// miscam in interiorul poligonului jocului 
// construim pol de taiere pe baza miscarilor
// verificam sa nu se intersecteze poligonul de taiere cu el insusi 
// verificam intersectia poligonului de taiere cu poligonul jocului
// taiem poligonul jocului in functie de poligonul de taiere si pozitia boss-ului
// masuram aria poligonului 







var sw = 320
var sh = 200
var gamepath = [[0, 0], [0, sh - 1], [sw - 1, sh - 1], [sw - 1, 0]]
var cutpath
var px = Math.floor(sw / 2)
var py = sh - 1
var bossx
var bossy
var pace = 1
var gamestate = 'moving'

function move_player (x, y) {
	px = x
	py = y
}

function start_cutting () {

}


// *************Game Interface
var canvas
var cx

function init_context() {
	canvas = $('#canvas')[0]
	cx = canvas.getContext('2d')
}

function clear_canvas() {
	cx.resetTransform()
	cx.clearRect(0, 0, canvas.width, canvas.height)
}

function draw_everything () {
	clear_canvas()
	// draw gamepath
	cx.translate(10, 10)
	cx.beginPath()
	cx.moveTo(gamepath[0][0], gamepath[0][1])
	for (var i = 1; i < gamepath.length; i++) {
		var p = gamepath[i]
		cx.lineTo(p[0], p[1])
	}
	cx.closePath()
	cx.stroke()
	// draw player
	cx.beginPath()
	cx.arc(px, py, 10, 0,2*Math.PI)
	cx.closePath()
	cx.stroke()

}

function go (how) {
	if (how == 'left') {
		move_player(px - pace, py)
	}
	else if (how == 'right') {
		move_player(px + pace, py)
	}
	else if (how == 'down') {
		move_player(px, py + pace)
	}	
	else if (how == 'up') {
		move_player(px, py - pace)
	}
	else if (how == 'cut') {
		start_cutting()
	}
 	draw_everything()
}


function handle_keydown (e) {
    if (e.keyCode == 37)  // left arrow
   		go('left') 
    else if (e.keyCode == 39) // right arrow
    	go('right')
    else if (e.keyCode == 40) // down arrow 
    	go('down')
    else if (e.keyCode == 38) // up key
		go('up')
	else if (e.keyCode == 32) // space key
		go('cut')
}


function main () {
	init_context()
	draw_everything()
	$(document).keydown(handle_keydown)
}

$(main)