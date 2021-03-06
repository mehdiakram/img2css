function cssifyImage(ctx, target, width, height) {
	var pixWidth = 1,
	        yOff = 2,
	      colors = ctx.getImageData(1, 1, width, height).data,
	   boxShadow = [],
	      imgIdx = 0;

	for (var y = 0; y < height; ++y) {
		for (var x = 0; x < width; ++x) {
			boxShadow.push(x + 'px ' + (yOff + y) + 'px 0 ' + pixWidth + 'px rgba(' + colors[imgIdx] + ', ' + colors[imgIdx + 1] + ', ' + colors[imgIdx + 2] +', ' + colors[imgIdx + 3] + ')');
			imgIdx += 4;
		}
	}
	target.style.boxShadow = boxShadow.join(',');
	target.style.width = target.style.height = '0';
}
window.onload = function() {
	var canvas = document.createElement('canvas'),
	       ctx = canvas.getContext('2d'),
	    target = document.createElement('div');
	
	document.body.appendChild(canvas);
	document.body.appendChild(target);
	
	var img = new Image();
	img.onload = function() {
		canvas.setAttribute('width',  img.width);
		canvas.setAttribute('height', img.height);
		ctx.drawImage(img, 0, 0);
		cssifyImage(ctx, target, img.width, img.height);
	}
	img.src = 'mona.jpg';
}
