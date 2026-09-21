(function () {
	const featuredTitle = document.querySelector('.featured-title');
	const featuredImage = document.querySelector('.featured-img');
	const featuredDesc = document.getElementById('featured-desc');

	if (!featuredTitle || !featuredImage || !featuredDesc) {
		return;
	}

	function setFeaturedProject(card) {
		if (!card) {
			return;
		}

		const title = card.querySelector('h3');
		const image = card.querySelector('img');
		const copy = card.querySelector('.project-copy');
		const meta = copy ? copy.querySelector('.project-meta') : null;
		const paragraphs = copy ? Array.from(copy.querySelectorAll('p')).filter((p) => !p.classList.contains('project-meta')) : [];
		const link = copy ? copy.querySelector('.project-btn, a[href]') : null;

		if (title) {
			featuredTitle.textContent = title.textContent.trim();
		}

		if (image) {
			featuredImage.src = image.src;
			featuredImage.alt = image.alt || (title ? title.textContent.trim() : 'Featured project image');
		}

		featuredDesc.innerHTML = '';

		if (meta) {
			const metaEl = document.createElement('p');
			metaEl.className = 'additional-info';
			metaEl.textContent = meta.textContent.trim();
			featuredDesc.appendChild(metaEl);
		}

		paragraphs.forEach((paragraph) => {
			const p = document.createElement('p');
			p.textContent = paragraph.textContent.trim();
			featuredDesc.appendChild(p);
		});

		if (link) {
			const linkEl = document.createElement('a');
			linkEl.className = 'btn';
			linkEl.href = link.href;
			linkEl.textContent = link.textContent.trim();
			featuredDesc.appendChild(linkEl);
		}
	}

	const directCard = document.querySelector('.project-card.featured-project');
	if (directCard) {
		setFeaturedProject(directCard);
		return;
	}

	fetch('/projects/')
		.then((response) => response.text())
		.then((html) => {
			const page = new DOMParser().parseFromString(html, 'text/html');
			const featuredCard = page.querySelector('.project-card.featured-project');
			setFeaturedProject(featuredCard);
		})
		.catch((error) => {
			console.warn('Featured project could not be loaded:', error);
		});
})();
