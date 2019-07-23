
document.addEventListener("DOMContentLoaded", (event) => {
	const bullets = [...document.querySelectorAll(".bullet")];
	const sliderBullets = document.querySelector(".slider-bullets");
	const slides = document.querySelectorAll(".slide");
	const sliderNavigationLeft = document.querySelector(".slider-navigation_left");
	const sliderNavigationRight = document.querySelector(".slider-navigation_right");
	const sliderBulletsLength = bullets[0].clientWidth * bullets.length;
	
	let leftIndex = -1, rightIndex;
	let isAnimating = false;
	
	let offset = 0;
	
	bullets[0].classList.add('bullet-active')
	slides[0].classList.add('slide-active')
	
	let selected = [document.querySelector('.bullet-active'), document.querySelector('.slide-active')];
	
	function ImageCarousel() {
		leftIndex = -1;

		if (sliderBulletsLength > sliderBullets.clientWidth) {
			if (window.innerWidth < 996) {
				rightIndex = 0;
				// Hide the bullets until there are 1 left
				for(let i = 0; i < bullets.length; i++) {
					if (i >= 1) {
						bullets[i].classList.add("bullet-hide")
					}
					else
					bullets[i].classList.remove("bullet-hide")
				}
			}
			else if (window.innerWidth < 1440) {
				rightIndex = 2;
				// Hide the bullets until there are 3 left
				for(let i = 0; i < bullets.length; i++) {
					if (i >= 3) {
						bullets[i].classList.add("bullet-hide")
					}
					else
					bullets[i].classList.remove("bullet-hide")
				}
			}
		} else if (window.innerWidth >= 996) {
			for(let i = 0; i < bullets.length; i++) {
				bullets[i].classList.remove("bullet-hide")
			}
		}
		
		let _loop = function _loop(i) {
			function slideReveal() {
				selected[0].classList.remove('bullet-active')
				selected[1].classList.remove('slide-active')
				
				bullets[i].className = "bullet bullet-active";
				slides[i].className = "slide slide-active";
				
				selected = [bullets[i], slides[i]]
			};
			
			bullets[i].onmouseover = slideReveal;
			bullets[i].onclick = slideReveal; // for mobile interaction
		};
		
		for (let i = 0; i < bullets.length; i++) {
			_loop(i);
		}
	}
	
	sliderNavigationRight.addEventListener('click', (event) => {
		if (rightIndex < bullets.length - 1) {
			leftIndex++;
			rightIndex++;
			
			bullets[leftIndex].classList.add('bullet-hide')
			bullets[rightIndex].classList.remove('bullet-hide')

		} 
	})
	sliderNavigationLeft.addEventListener('click', (event) => {
		if (leftIndex > -1) {
			bullets[leftIndex--].classList.remove('bullet-hide');
			bullets[rightIndex--].classList.add('bullet-hide');
		}
	})
	
	window.addEventListener("load", ImageCarousel)
	window.addEventListener("resize", ImageCarousel)
})
