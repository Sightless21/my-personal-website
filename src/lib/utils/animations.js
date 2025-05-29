/**
 * Generate random positions and delays for space elements
 */
export const generateSpaceElements = {
	stars: (count = 150) =>
		Array.from({ length: count }, (_, i) => ({
			id: i,
			left: Math.random() * 100,
			top: Math.random() * 100,
			delay: Math.random() * 3,
			type: (i % 3) + 1
		})),

	dust: (count = 50) =>
		Array.from({ length: count }, (_, i) => ({
			id: i,
			left: Math.random() * 100,
			top: Math.random() * 100,
			delay: Math.random() * 10
		})),

	shootingStars: (count = 8) =>
		Array.from({ length: count }, (_, i) => ({
			id: i,
			startX: Math.random() * 100,
			startY: Math.random() * 50,
			delay: Math.random() * 15,
			duration: 2 + Math.random() * 3,
			angle: 30 + Math.random() * 60
		}))
};

/**
 * Smooth scroll to element
 */
export const scrollToElement = (elementId) => {
	const element = document.getElementById(elementId);
	if (element) {
		element.scrollIntoView({ behavior: 'smooth' });
	}
};
