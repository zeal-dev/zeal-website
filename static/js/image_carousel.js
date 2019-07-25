document.addEventListener("DOMContentLoaded", (event) => {
	const bullets = [...document.querySelectorAll(".bullet")];
	const sliderBullets = document.querySelector(".slider-bullets");
	const slides = [...document.querySelectorAll(".slide")];
	const sliderNavigation = [...document.querySelectorAll(".slider-navigation")]
	const sliderNavigationLeft = document.querySelector(".slider-navigation_left");
	const sliderNavigationRight = document.querySelector(".slider-navigation_right");
	const sliderBulletsLength = bullets[0].clientWidth * bullets.length; // bc display: none changes lenghth, a constant is defined first

	// Controls which element gets hidden and shown when navigating left or right
	let leftIndex = -1, rightIndex;

	let selected;
	
	function ImageCarousel() {
		bullets.forEach(e => e.classList.remove('bullet-active'))
		slides.forEach(e => e.classList.remove('slide-active'))

		// Make the first slide and bullet activated
		bullets[0].classList.add('bullet-active')
		slides[0].classList.add('slide-active')

		//  Select the default element used to swap 'active' classes
		selected = [document.querySelector('.bullet-active'), document.querySelector('.slide-active')];
		
		leftIndex = -1; // Makes it compatible with navigating right

		// Determines elements that should be hidden first
		if (sliderBulletsLength > sliderBullets.clientWidth || bullets.length > 5) {
			if (window.innerWidth < 996) {
				rightIndex = 0; // Points to the element right before the first hidden

				if (bullets.length > 1) 
					sliderNavigation.forEach(e => e.style.display = `initial`);

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
				rightIndex = 2; // Points to the element right before the first hidden

				if (bullets.length === 3) {
					sliderNavigation.forEach(e => e.style.display = `none`)
				} else {
					sliderNavigation.forEach(e => e.style.display = `initial`)
				}

				// Hide the bullets until there are 3 left
				for(let i = 0; i < bullets.length; i++) {
					if (i >= 3) {
						bullets[i].classList.add("bullet-hide")
					}
					else
					bullets[i].classList.remove("bullet-hide")
				}
			} else {
				rightIndex = 4;

				// Hide the bullets until there are 3 left
				for(let i = 0; i < bullets.length; i++) {
					if (i >= 5) {
						bullets[i].classList.add("bullet-hide")
					}
					else
					bullets[i].classList.remove("bullet-hide")
				}
			}
		} else if (window.innerWidth >= 996) {
			if (bullets.length === 5 || bullets.length === 3) {
				sliderNavigation.forEach(e => e.style.display = `none`);
			}

			for(let i = 0; i < bullets.length; i++) {
				bullets[i].classList.remove("bullet-hide")
			}
		}
		
		// Itereate through all bullets and add event listeners
		let _loop = function _loop(i) {
			// Swap 'active' elements
			function slideReveal() {
				selected[0].classList.remove('bullet-active')
				selected[1].classList.remove('slide-active')
				
				bullets[i].className = "bullet bullet-active";
				slides[i].className = "slide slide-active";
				
				selected = [bullets[i], slides[i]] // Sets the next element to be swapped out
			};
			
			bullets[i].onmouseover = slideReveal;
			bullets[i].onclick = slideReveal; // for mobile interaction
		};
		
		for (let i = 0; i < bullets.length; i++) {
			_loop(i);
		}
	}
	
	// Right navigation click
	sliderNavigationRight.addEventListener('click', (event) => {
		if (rightIndex < bullets.length - 1) {
			bullets[++leftIndex].classList.add('bullet-hide')
			bullets[++rightIndex].classList.remove('bullet-hide')

			if (window.innerWidth < 996) {
				selected[0].classList.remove('bullet-active')
				selected[1].classList.remove('slide-active')

				bullets[rightIndex].classList.add('bullet-active');
				slides[rightIndex].classList.add('slide-active');

				selected = [bullets[rightIndex], slides[rightIndex]]
			}
		} 
	})

	// Left navigation click
	sliderNavigationLeft.addEventListener('click', (event) => {
		if (leftIndex > -1) {
			bullets[leftIndex--].classList.remove('bullet-hide');
			bullets[rightIndex--].classList.add('bullet-hide');

			if (window.innerWidth < 996) {
				selected[0].classList.remove('bullet-active')
				selected[1].classList.remove('slide-active')

				bullets[leftIndex + 1].classList.add('bullet-active');
				slides[leftIndex + 1].classList.add('slide-active');

				selected = [bullets[leftIndex + 1], slides[leftIndex + 1]]
			}
		}
	})
	
	// Initialize 
	window.addEventListener("load", ImageCarousel)
	window.addEventListener("resize", ImageCarousel)
})
