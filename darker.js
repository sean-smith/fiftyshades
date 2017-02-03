/*
 * Thanks stack overflow for the rgb to hex
 * http://stackoverflow.com/questions/1740700/how-to-get-hex-color-value-rather-than-rgb-value
 * 
 * Copyright 2016 (Sean Copyright)
 * copyright, lol
 * IDGAF and I don't have lawyers
 * so 🤑 but do read seanssmith.com/copyright.html
 */
var colors = [
	{color: '#F3F3F3', name: 'Digital Ocean'}, 
	{color: '#F5F5F5', name: 'Github'}, 
	{color: '#F7F7F7', name: 'Foundation'}, 
	{color: '#F3F5F6', name: 'JSFiddle'}, 
	{color: '#F1F1F1', name: 'W3Schools'}, 
	{color: '#EFF0F1', name: 'StackOverflow'}, 
	{color: '#F7F7F5', name: 'LatoFonts'}, 
	{color: '#F7F7F9', name: 'Bootstrap'},
	{color: '#FAFAFA', name: 'Google'},
	{color: '#EEEEEE', name: 'simpl.info'},
	{color: '#E9EBEE', name: 'Facebook'},
	{color: '#F1F0F0', name: 'Messenger'},
	{color: '#F2F2F4', name: 'Uber'},
	{color: '#FBFBFB', name: 'Uber API'},
	{color: '#F3F3F3', name: 'Medium'},
	{color: '#FAFAFA', name: 'nvie.com'},
	{color: '#F6F6F6', name: 'www.codeword.xyz'},
	{color: '#E9EAEA', name: 'Code Academy'}
];


var hexDigits = new Array
        ("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"); 

//Function to convert rgb color to hex format
function rgb2hex(rgb) {
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
  return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
 }


var sorted = colors.sort(function(a, b) {
	if (a['color'] < b['color']) {
		return -1;
	} else if (a['color'] > b['color']) {
		return 1;
	}
	return 0;
});


var swaths = document.getElementById('swaths');
for (i = 0; i < sorted.length; i++) {
	var color = sorted[i]['color'];
	var name = sorted[i]['name'];
	swaths.innerHTML += `<div class='swath' style='background-color: ${color};'><div class='text' style='color: ${color}'>${color} <br> ${name}</div></div>`;
}
