var bullets = document.querySelectorAll(".bullet");
var slides = document.querySelectorAll(".slide");

var _loop = function _loop(i) {
	function slideReveal() {
		var x = 0;
		var y = 0;
		while (x < bullets.length && y < slides.length) {
			bullets[x++].className = 'bullet';
			slides[y++].className = 'slide';
		}
	
		bullets[i].className = "bullet bullet-active";
		slides[i].className = "slide slide-active";
	};

	bullets[i].onmouseover = slideReveal;
	bullets[i].onclick = slideReveal; // for mobile interaction
};

for (var i = 0; i < bullets.length; i++) {
	_loop(i);
}