class ImageCarousel {
	constructor(options = {
		startPosition: 0,
	}) {
		const defaultOptions = {
			startPosition: 0,
			autoplay: false,
			autoplayDelay: 3000,
		}
		this.options = Object.assign(defaultOptions, options);

		// Store elements from website
		this.bullets = [...document.querySelectorAll(".bullet")];
		this.sliderBullets = document.querySelector(".slider-bullets");
		this.slides = [...document.querySelectorAll(".slide")];
		this.sliderGallery = document.querySelector(".slider-gallery");
		this.sliderNavigation = [...document.querySelectorAll(".slider-navigation")];
		this.sliderNavigationLeft = document.querySelector(".slider-navigation_left");
		this.sliderNavigationRight = document.querySelector(".slider-navigation_right");
		
		// calculate useful dimensions
		this.sliderBulletsLength = this.bullets[0].clientWidth * this.bullets.length; // bc display: none changes lenghth, a constant is defined first
		this.sliderGalleryLength = 0;
		this.slideLength = this.slides[0].scrollWidth;
		this.slidesOffset = 0;
		this.slidesPosition = 0;
		this.currentPosition = 0;
		this.visibleLength = 0; // visible length is amount of bullets that should be visible

		this.navigationDisabled = false;
		
		this.leftClones = [];
		this.rightClones = [];

		// Controls which element gets hidden and shown when navigating left or right
		this.leftIndex = -1, this.rightIndex = 0;
		
		// The current bullet and slide
		this.selected;

		// Iterate through all bullets and add event listeners
		for (let i = 0; i < this.bullets.length; i++) {
			this.bullets[i].addEventListener('mouseover', () => this.slideSwap(i));
			this.bullets[i].addEventListener('click', () => this.slideSwap(i));
		}

		// Right navigation click
		this.sliderNavigationRight.addEventListener('click', (event) => {
			if (this.rightIndex < this.bullets.length - 1) {
				this.bullets[++this.leftIndex].classList.add('bullet-hide')
				this.bullets[++this.rightIndex].classList.remove('bullet-hide')
				
				this.isNavigationEnd();

				this.currentPosition = this.rightIndex;
				
				// When on mobile mode, tapping right means switching the slide as well
				if (window.innerWidth < 996) {
					this.slideSwap(this.rightIndex);
				}
			} 
		})
	
		// Left navigation click
		this.sliderNavigationLeft.addEventListener('click', (event) => {
			if (this.leftIndex > -1) {
				this.bullets[this.leftIndex--].classList.remove('bullet-hide');
				this.bullets[this.rightIndex--].classList.add('bullet-hide');
				
				this.isNavigationEnd();

				this.currentPosition = this.leftIndex + 1;

				// When on mobile mode, tapping left means switching the slide as well
				if (window.innerWidth < 996) {
					this.slideSwap(this.leftIndex + 1);
				}
			}
		})

		// Initialize 
		window.addEventListener("load", () => {
			this.ImageCarouselInitialize()

			this.setActive()

			if (this.options.autoplay) {
				setInterval(() => {
					if (this.currentPosition >= this.slides.length)  {
						this.currentPosition = 0;
						if (!this.navigationDisabled) {
							for (let i = 0; i < this.slides.length; i++) {
								this.sliderNavigationLeft.dispatchEvent(new MouseEvent('click'))
							}
						}
					}
					if (this.currentPosition >= this.visibleLength) {
						if (!this.navigationDisabled) {
							this.sliderNavigationRight.dispatchEvent(new MouseEvent('click'))
						}
					} 
					
					this.slideSwap(this.currentPosition);

					this.currentPosition++;
				}, this.options.autoplayDelay)
			}

			this.setStartIndex(this.options.startPosition);
		})
		window.addEventListener("resize", () => {
			let resizeTimer;
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(this.ImageCarouselInitialize.bind(this), 500);
		})
		window.addEventListener("orientationchange", this.ImageCarouselInitialize.bind(this))
	}

	setActive() {
		// Make the current slide and bullet activated
		this.bullets[this.currentPosition].classList.add('bullet-active')
		this.slides[this.currentPosition].classList.add('slide-active')
		
		//  Select the default element used to swap 'active' classes
		this.selected = [document.querySelector('.bullet-active'), document.querySelector('.slide-active')];
	}

	// Check if we're at the very first element or last element of navigation
	// If we are, hide the respective buttons
	isNavigationEnd() {
		if (this.leftIndex <= -1) {
			// Here the opacity is set too so the CSS transition applies
			this.sliderNavigationLeft.style.opacity = `0`;
			this.sliderNavigationLeft.style.visibility = `hidden`;
		} else {
			this.sliderNavigationLeft.style.opacity = ``
			this.sliderNavigationLeft.style.visibility = `visible`
		}
		
		if (this.rightIndex >= this.bullets.length - 1) {
			this.sliderNavigationRight.style.opacity = `0`;
			this.sliderNavigationRight.style.visibility = `hidden`;
		} else {
			this.sliderNavigationRight.style.opacity = ``;
			this.sliderNavigationRight.style.visibility = `visible`;
		}
	}

	// Controls the layout and what gets shown
	// It's called when the viewport changes
	ImageCarouselInitialize() {
		// By default, nothing should be active
		this.bullets.forEach(e => e.classList.remove('bullet-active'))
		this.slides.forEach(e => {
			e.classList.remove('slide-active')

			this.sliderGalleryLength += e.scrollWidth; // get total length for sliding purposes
		})

		this.setActive()

		this.slideSwap(this.currentPosition)

		this.leftIndex = -1 + this.currentPosition; // Makes it compatible with navigating right

		// Determines elements that should be hidden first
		if (this.sliderBulletsLength > (this.sliderBullets.clientWidth - this.sliderNavigationLeft.clientWidth * 2) || this.bullets.length > 5) {
			if (window.innerWidth < 996) {
				// Here, we only want to display 1 bullet
				this.rightIndex = this.currentPosition;

				this.visibleLength = 1;
				this.navigationDisabled = true;

				// Make the navigation visible when there's more than one element
				if (this.bullets.length > 1) { 
					this.sliderNavigation.forEach(e => e.style.visibility = `visible`);
					this.sliderNavigation.forEach(e => e.style.opacity = ``);
					this.isNavigationEnd();

					this.navigationDisabled = false;
				} 
				
				// Hide the bullets until there are 1 left
				for(let i = 0; i < this.bullets.length; i++) {
					if (i != this.currentPosition) {
						this.bullets[i].classList.add("bullet-hide")
					}
					else
						this.bullets[i].classList.remove("bullet-hide")
				}
			}
			else if (window.innerWidth < 1440) {
				// Here, we want to display only 3 bullets

				this.visibleLength = 3;

				// This sets the bounds for which buttons are visible
				// This also handles the syncing
				this.rightIndex = this.currentPosition + 2;

				if (this.slides.length - this.currentPosition <= 2) {
					this.rightIndex = this.slides.length - 1;
					this.leftIndex = this.slides.length - 4;
				}
				
				// Hide the navigation
				// Since 3 elements will be shown, if there's already 3, there's no point to show the arrows
				if (this.bullets.length === 3) {
					this.sliderNavigation.forEach(e => e.style.opacity = `0`)
					this.sliderNavigation.forEach(e => e.style.visibility = `hidden`)
					
					this.navigationDisabled = true;
				} else {
					this.sliderNavigation.forEach(e => e.style.opacity = ``)
					this.sliderNavigation.forEach(e => e.style.visibility = `visible`)
					this.isNavigationEnd();
					
					this.navigationDisabled = false;
				}
				
				// Hide the bullets until there are 3 left
				for(let i = 0; i < this.bullets.length; i++) {
					if (i > this.leftIndex && i <= this.rightIndex)
						this.bullets[i].classList.remove("bullet-hide")
					else {
						this.bullets[i].classList.add("bullet-hide")
					}
				}
			} else { 
				// This is for larger viewports

				this.visibleLength = 5;

				if (this.bullets.length === 5) {
					this.sliderNavigation.forEach(e => e.style.opacity = `0`)
					this.sliderNavigation.forEach(e => e.style.visibility = `hidden`)
					
					this.navigationDisabled = true;
				} else {
					this.sliderNavigation.forEach(e => e.style.opacity = ``)
					this.sliderNavigation.forEach(e => e.style.visibility = `visible`)
					this.isNavigationEnd();

					this.navigationDisabled = false;
				}

				// This sets the bounds for which buttons are visible
				// This also handles the syncing
				this.rightIndex = this.currentPosition + 4;

				if (this.slides.length - this.currentPosition <= 4) {
					this.rightIndex = this.slides.length - 1;
					this.leftIndex = this.slides.length - 6;
				}

				this.isNavigationEnd();
				
				// Hide the bullets until there are 5 left
				for(let i = 0; i < this.bullets.length; i++) {
					if (i > this.leftIndex && i <= this.rightIndex)
						this.bullets[i].classList.remove("bullet-hide")
					else {
						this.bullets[i].classList.add("bullet-hide")
					}
				}
			}
		} else {
			// Here, there's no responsive issues with the width of the slider so just show it all
			
			// Since there's no responsive issues, there's no need for navigation
			this.sliderNavigation.forEach(e => e.style.opacity = `0`);
			this.sliderNavigation.forEach(e => e.style.visibility = `hidden`);

			this.navigationDisabled = true;
			
			// Since there's no responsive issues, nothing should be hidden
			for(let i = 0; i < this.bullets.length; i++) {
				this.bullets[i].classList.remove("bullet-hide")
			}
		}
	}

	// Swap a bullet and slide (switching to the next one)
	slideSwap(index) {
		this.currentPosition = index;
		this.slideLength = this.slides[0].scrollWidth;
		
		// Swap bullet and slide active states
		this.selected[0].classList.remove('bullet-active')
		this.selected[1].classList.remove('slide-active')
		
		this.bullets[index].classList.add('bullet-active');
		this.slides[index].classList.add('slide-active');
		
		// The translation is based on index position and slide width
		this.slidesPosition = -index * this.slideLength;
		
		Array.from(this.sliderGallery.children).forEach(e => {
			e.style.transform = `translateX(${this.slidesPosition + this.slidesOffset}px)`;	
		})
		
		// set new selected bullet for future swaps
		this.selected = [this.bullets[index], this.slides[index]]
	}

	// Change start index for ordering purposes
	setStartIndex(deltaIndex) {
		if (deltaIndex > 0 && deltaIndex < this.slides.length) {
			this.leftIndex += deltaIndex;
			this.rightIndex += deltaIndex;
			
			this.isNavigationEnd();
	
			this.bullets[this.leftIndex].classList.add('bullet-hide')
			this.bullets[this.rightIndex].classList.remove('bullet-hide')
	
			this.slideSwap(deltaIndex);
		}
	}

	// Offset adds clones of slides to remove any blank spaces or if you want to start at a different slide
	// Example: you want to start in the middle slide, not the start slide, so you set the offset to 1
	setOffset(offset) {
		this.leftClones.forEach(e => e.remove())
		this.rightClones.forEach(e => e.remove())

		for (let i = 0; i < offset; i++) {
			this.leftClones.unshift(this.sliderGallery.insertBefore(this.slides[this.slides.length - (i + 1)].cloneNode(true), this.sliderGallery.children[0]))
			this.rightClones.unshift(this.sliderGallery.appendChild(this.slides[i].cloneNode(true)))
		}
	}
}

