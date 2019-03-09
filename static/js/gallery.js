function setupGallery() {
  const images = document.querySelectorAll(".image");

  function onScroll() {
    const minY = window.pageYOffset - window.innerHeight;
    const maxY = window.pageYOffset + window.innerHeight;

    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      if (!image.dataset.loaded) {
        const thumbnailUrl = image.dataset.thumbnail;

        const y =
          image.getBoundingClientRect().top +
          document.documentElement.scrollTop;

        if (minY < y && y < maxY) {
          image.dataset.loaded = "true";
          const img = new Image();
          img.onload = function() {
            image.style.backgroundImage = 'url("' + thumbnailUrl + '")';
            image.classList.add("loaded");
          };
          img.src = thumbnailUrl;
        }
      }
    }
  }

  onScroll();
  window.addEventListener("scroll", onScroll);
}

new Vue({
  el: "#gallery",
  data: {
    lightboxShown: false,
    lightboxOpacity: 0,
    imageOpacity: 0,
    selectedImage: "",
    selectedImageTop: 0,
    selectedImageLeft: 0,
    selectedImageWidth: 0,
    selectedImageHeight: 0
  },
  mounted: function() {
    requestAnimationFrame(function() {
      requestAnimationFrame(setupGallery);
    });
  },
  methods: {
    showImage: function(e, thumbnail, image) {
      const that = this;

      that.selectedImage = thumbnail;

      const rect = e.target.getBoundingClientRect();
      that.selectedImageTop = rect.top;
      that.selectedImageLeft = rect.left;
      that.selectedImageWidth = rect.width + "px";
      that.selectedImageHeight = rect.height + "px";
      that.lightboxOpacity = 0;
      that.imageOpacity = 1;
      that.lightboxShown = true;

      const img = new Image();
      img.onload = function() {
        that.selectedImage = image;
      };

      // Double requestAnimationFrame ensures initial animation state renders
      requestAnimationFrame(function() {
        requestAnimationFrame(function() {
          that.lightboxOpacity = 1;
          that.selectedImageTop = 40;
          that.selectedImageLeft = 40;
          that.selectedImageWidth = `calc(100vw - 80px)`;
          that.selectedImageHeight = `calc(100vh - 80px)`;
          img.src = image;
        });
      });
    },
    hideImage: function() {
      const that = this;

      that.imageOpacity = 0;
      that.lightboxOpacity = 0;
      setTimeout(function() {
        that.lightboxShown = false;
        that.selectedImageTop = 0;
        that.selectedImageLeft = 0;
        that.selectedImageWidth = "0";
        that.selectedImageHeight = "0";
      }, 500);
    }
  }
});
