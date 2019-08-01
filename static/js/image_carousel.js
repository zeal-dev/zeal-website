document.addEventListener("DOMContentLoaded", (event) => {
	const bullets = [...document.querySelectorAll(".bullet")];
	const sliderBullets = document.querySelector(".slider-bullets");
	const slides = [...document.querySelectorAll(".slide")];
	const sliderNavigation = [...document.querySelectorAll(".slider-navigation")]
	const sliderNavigationLeft = document.querySelector(".slider-navigation_left");
	const sliderNavigationRight = document.querySelector(".slider-navigation_right");
	const sliderBulletsLength = bullets[0].clientWidth * bullets.length; // bc display: none changes lenghth, a constant is defined first
	
	// Controls which element gets hidden and shown when navigating left or right
	let leftIndex = -1, rightIndex = 0;
	
	// The current bullet and slide
	let selected;
	
	// Check if we're at the very first element or last element of navigation
	// If we are, hide the respective buttons
	function isNavigationEnd() {
		if (leftIndex <= -1) {
			// Here the opacity is set too so the CSS transition applies
			sliderNavigationLeft.style.opacity = `0`;
			sliderNavigationLeft.style.visibility = `hidden`;
		} else {
			sliderNavigationLeft.style.opacity = ``
			sliderNavigationLeft.style.visibility = `visible`
		}
		
		if (rightIndex >= bullets.length - 1) {
			sliderNavigationRight.style.opacity = `0`;
			sliderNavigationRight.style.visibility = `hidden`;
		} else {
			sliderNavigationRight.style.opacity = ``;
			sliderNavigationRight.style.visibility = `visible`;
		}
	}
	
	// Swap a bullet and slide (switching to the next one)
	function slideSwap(index) {
		selected[0].classList.remove('bullet-active')
		selected[1].classList.remove('slide-active')
		
		bullets[index].classList.add('bullet-active');
		slides[index].classList.add('slide-active');
		
		selected = [bullets[index], slides[index]]
	}
	
	// Controls the layout and what gets shown
	// It's called when the viewport changes
	function ImageCarousel() {
		// By default, nothing should be active
		bullets.forEach(e => e.classList.remove('bullet-active'))
		slides.forEach(e => e.classList.remove('slide-active'))
		
		// Make the first slide and bullet activated
		bullets[0].classList.add('bullet-active')
		slides[0].classList.add('slide-active')
		
		//  Select the default element used to swap 'active' classes
		selected = [document.querySelector('.bullet-active'), document.querySelector('.slide-active')];
		
		leftIndex = -1; // Makes it compatible with navigating right

		// Determines elements that should be hidden first
		if (sliderBulletsLength > (sliderBullets.clientWidth - sliderNavigationLeft.clientWidth * 2) || bullets.length > 5) {
			if (window.innerWidth < 996) {
				// Here, we only want to display 1 bullet
				rightIndex = 0;
				
				// Make the navigation visible when there's more than one element
				if (bullets.length > 1) { 
					sliderNavigation.forEach(e => e.style.visibility = `visible`);
					sliderNavigation.forEach(e => e.style.opacity = ``);
					isNavigationEnd();
				}
				
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
				// Here, we want to display only 3 bullets
				rightIndex = 2;
				
				// Since 3 elements will be shown, if there's already 3, there's no point to show the arrows
				if (bullets.length === 3) {
					sliderNavigation.forEach(e => e.style.opacity = `0`)
					sliderNavigation.forEach(e => e.style.visibility = `hidden`)
				} else {
					sliderNavigation.forEach(e => e.style.opacity = ``)
					sliderNavigation.forEach(e => e.style.visibility = `visible`)
					isNavigationEnd();
				}
				
				// Hide the bullets until there are 3 left
				for(let i = 0; i < bullets.length; i++) {
					if (i >= 3) {
						bullets[i].classList.add("bullet-hide")
					}
					else
					bullets[i].classList.remove("bullet-hide")
				}
			} else { // This is for larger viewports
				// This time we want to only show 5 elements, so we select the 5th element instead of the 3rd
				rightIndex = 4;
				
				// Hide the bullets until there are 5 left
				for(let i = 0; i < bullets.length; i++) {
					if (i >= 5) {
						bullets[i].classList.add("bullet-hide")
					}
					else
						bullets[i].classList.remove("bullet-hide")
				}
			}
		} else {
			// Here, there's no responsive issues with the width of the slider so just show it all
			
			// Since there's no responsive issues, there's no need for navigation
			sliderNavigation.forEach(e => e.style.opacity = `0`);
			sliderNavigation.forEach(e => e.style.visibility = `hidden`);
			
			// Since there's no responsive issues, nothing should be hidden
			for(let i = 0; i < bullets.length; i++) {
				bullets[i].classList.remove("bullet-hide")
			}
		}
	}
	
	// Iterate through all bullets and add event listeners
	for (let i = 0; i < bullets.length; i++) {
		bullets[i].addEventListener('mouseover', () => slideSwap(i));
		bullets[i].addEventListener('click', () => slideSwap(i));
	}

	// Right navigation click
	sliderNavigationRight.addEventListener('click', (event) => {
		if (rightIndex < bullets.length - 1) {
			bullets[++leftIndex].classList.add('bullet-hide')
			bullets[++rightIndex].classList.remove('bullet-hide')
			
			isNavigationEnd();
			
			// When on mobile mode, tapping right means switching the slide as well
			if (window.innerWidth < 996) {
				slideSwap(rightIndex);
			}
		} 
	})
	
	// Left navigation click
	sliderNavigationLeft.addEventListener('click', (event) => {
		if (leftIndex > -1) {
			bullets[leftIndex--].classList.remove('bullet-hide');
			bullets[rightIndex--].classList.add('bullet-hide');
			
			isNavigationEnd();
			
			// When on mobile mode, tapping left means switching the slide as well
			if (window.innerWidth < 996) {
				slideSwap(leftIndex + 1);
			}
		}
	})
	
	// Initialize 
	window.addEventListener("load", ImageCarousel)
	window.addEventListener("resize", ImageCarousel)
	window.addEventListener("orientationchange", ImageCarousel)
})
