function updateImageFrame() {
  const img = document.getElementById('current-image');
  const randomIndex = Math.floor(Math.random() * images.length);

  img.src = images[randomIndex];

  img.onload = function() {
    if (img.naturalWidth > img.naturalHeight) {
      img.style.width = 'auto';
      img.style.height = 'auto';
    } else {
      img.style.height = '100%';
      img.style.width = 'auto';
    }
  };
}

function toggleFullscreen() {
  const imageFrame = document.getElementById('image-frame');
  const fullscreenBtn = document.getElementById('fullscreen-btn');
  const exitFullscreenBtn = document.getElementById('exit-fullscreen-btn');

  if (window.innerWidth >= 768) {
    if (!document.fullscreenElement) {
      if (imageFrame.requestFullscreen) {
        imageFrame.requestFullscreen();
      } else if (imageFrame.mozRequestFullScreen) {
        imageFrame.mozRequestFullScreen();
      } else if (imageFrame.webkitRequestFullscreen) {
        imageFrame.webkitRequestFullscreen();
      } else if (imageFrame.msRequestFullscreen) {
        imageFrame.msRequestFullscreen();
      }
      fullscreenBtn.classList.add('hidden');
      exitFullscreenBtn.classList.remove('hidden');
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      fullscreenBtn.classList.remove('hidden');
      exitFullscreenBtn.classList.add('hidden');
    }
  } else {
    fullscreenBtn.style.display = "none";
    exitFullscreenBtn.style.display = "none";
  }
}

document.getElementById('fullscreen-btn').addEventListener('click', toggleFullscreen);
document.getElementById('exit-fullscreen-btn').addEventListener('click', toggleFullscreen);

window.addEventListener('load', function() {
  const fullscreenBtn = document.getElementById('fullscreen-btn');
  const exitFullscreenBtn = document.getElementById('exit-fullscreen-btn');

  if (window.innerWidth < 768) {
    fullscreenBtn.style.display = "none";
    exitFullscreenBtn.style.display = "none";
  }
});

setInterval(updateImageFrame, 3000);

function updateCategorySlider() {
  const sliderContainer = document.getElementById('slider-container');
  sliderContainer.innerHTML = '';

  categories.forEach(category => {
    const card = document.createElement('div');
    card.className = 'category-card';

    const description = category.description;

    card.innerHTML = `
      <img src="${category.image}" alt="${category.name}">
      <h3>${category.name}</h3>
      <p class="description">${description}</p>
      <button onclick="openGallery('${category.name}')">Open Gallery</button>
    `;

    sliderContainer.appendChild(card);

    const descriptionElement = card.querySelector('.description');

    if (descriptionElement.scrollWidth > descriptionElement.clientWidth) {
      setTimeout(() => {
        descriptionElement.classList.add('scroll-text');
      }, 5000);
    }
    setTimeout(() => {
      descriptionElement.innerHTML = `<span>${description}</span>`;
      descriptionElement.classList.add('scroll-text');
    }, 5000);
  });
}

window.onload = function() {
  const fullscreenContainer = document.getElementById('fullscreen-container');
  fullscreenContainer.classList.remove('show-arrows');
};

let currentImages = [];
let currentImageIndex = 0;

function openFullscreen(imageSrc, imagesInCategory) {
  const fullscreenContainer = document.getElementById('fullscreen-container');
  const fullscreenImage = document.getElementById('fullscreen-image');
  const filenameElement = document.getElementById('fullscreen-filename');
  const downloadLink = document.getElementById('download-image');

  currentImages = imagesInCategory;
  currentImageIndex = imagesInCategory.indexOf(imageSrc);

  fullscreenImage.src = imageSrc;

  const fileName = imageSrc.split('/').pop();
  filenameElement.textContent = fileName;

  downloadLink.href = imageSrc;
  downloadLink.download = fileName;

  fullscreenContainer.style.display = 'flex';

  showArrows();

  document.getElementById('close-fullscreen').onclick = function() {
    fullscreenContainer.style.display = 'none';
  };

  document.getElementById('prev-image').onclick = function() {
    navigateImage(-1);
  };

  document.getElementById('next-image').onclick = function() {
    navigateImage(1);
  };

  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
      navigateImage(1);
    } else if (event.key === 'ArrowLeft') {
      navigateImage(-1);
    }
  });

  let startX = 0;
  fullscreenContainer.addEventListener('touchstart', function(event) {
    startX = event.touches[0].clientX;
  });

  fullscreenContainer.addEventListener('touchend', function(event) {
    let endX = event.changedTouches[0].clientX;
    if (startX - endX > 50) {
      navigateImage(1);
    } else if (endX - startX > 50) {
      navigateImage(-1);
    }
  });
}

function navigateImage(direction) {
  currentImageIndex += direction;

  if (currentImageIndex < 0) {
    currentImageIndex = currentImages.length - 1;
  }
  if (currentImageIndex >= currentImages.length) {
    currentImageIndex = 0;
  }

  const newImageSrc = currentImages[currentImageIndex];
  document.getElementById('fullscreen-image').src = newImageSrc;

  const fileName = newImageSrc.split('/').pop();
  document.getElementById('fullscreen-filename').textContent = fileName;
  const downloadLink = document.getElementById('download-image');
  downloadLink.href = newImageSrc;
  downloadLink.download = fileName;
}

function showArrows() {
  const fullscreenContainer = document.getElementById('fullscreen-container');
  fullscreenContainer.classList.add('show-arrows');

  setTimeout(function() {
    fullscreenContainer.classList.remove('show-arrows');
  }, 5000);
}

document.getElementById('fullscreen-container').addEventListener('mousemove', showArrows);

function openGallery(categoryName) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';
  currentIndex = 0;
  const imagesInCategory = categories.find(cat => cat.name === categoryName).images;

  const closeButton = document.createElement('button');
  closeButton.textContent = 'Close Gallery';
  closeButton.className = 'close-gallery-button';
  closeButton.onclick = function() {
    gallery.style.display = 'none';
  };

  function loadMoreImages() {
    const imagesToLoad = imagesInCategory.slice(currentIndex, currentIndex + 32);

    imagesToLoad.forEach(image => {
      const item = document.createElement('div');
      item.className = 'gallery-item';

      const fileName = image.split('/').pop();

      const imgElement = document.createElement('img');
      imgElement.src = image;
      imgElement.alt = fileName;
      imgElement.onclick = function() {
        openFullscreen(image, imagesInCategory);
      };

      const fileInfoContainer = document.createElement('div');
      fileInfoContainer.className = 'file-info-container';

      const infoWrapper = document.createElement('div');
      infoWrapper.style.display = 'flex';

      const fileNameElement = document.createElement('span');
      fileNameElement.className = 'file-name';
      fileNameElement.textContent = fileName;

      const downloadButton = document.createElement('a');
      downloadButton.href = image;
      downloadButton.download = fileName;
      downloadButton.className = 'download-button-main';
      downloadButton.innerHTML = '<i class="fas fa-download"></i>';

      infoWrapper.appendChild(fileNameElement);
      infoWrapper.appendChild(downloadButton);

      fileInfoContainer.appendChild(infoWrapper);

      item.appendChild(imgElement);
      item.appendChild(fileInfoContainer);

      gallery.appendChild(item);
    });

    currentIndex += 32;

    if (currentIndex < imagesInCategory.length) {
      const loadMoreButton = document.createElement('button');
      loadMoreButton.textContent = 'Load More';
      loadMoreButton.className = 'load-more-button';
      loadMoreButton.onclick = function() {
        loadMoreButton.remove();
        loadMoreImages();
      };

      gallery.appendChild(loadMoreButton);
      gallery.appendChild(closeButton);
    } else {
      gallery.appendChild(closeButton);
    }
  }

  loadMoreImages();

  gallery.style.display = 'flex';
}

updateImageFrame();
updateCategorySlider();

const sliderContainer = document.getElementById('slider-container');

document.getElementById('prev-category').addEventListener('click', () => {
  slideCategories('prev');
});

document.getElementById('next-category').addEventListener('click', () => {
  slideCategories('next');
});

function slideCategories(direction) {
  const cardWidth = document.querySelector('.category-card').offsetWidth;
  const scrollAmount = cardWidth + 20;

  if (direction === 'next') {
    sliderContainer.scrollLeft += scrollAmount;
  } else if (direction === 'prev') {
    sliderContainer.scrollLeft -= scrollAmount;
  }
}

document.addEventListener('dblclick', function(event) {
  event.preventDefault();
});

function preventScreenSleep() {
  const fullScreenElement = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
  if (fullScreenElement) {
    window.requestAnimationFrame(preventScreenSleep);
  }
}

document.addEventListener('fullscreenchange', preventScreenSleep);
document.addEventListener('webkitfullscreenchange', preventScreenSleep);
document.addEventListener('mozfullscreenchange', preventScreenSleep);
document.addEventListener('MSFullscreenChange', preventScreenSleep);
