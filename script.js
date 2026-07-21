// ===== D&S Excavation =====
(function () {
  "use strict";

  // Current year in footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Close menu when a link is tapped
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Placeholder tiles: mark as "filled" once a job image actually loads
  document.querySelectorAll(".gallery-item.is-placeholder img").forEach(function (img) {
    function markFilled() {
      if (img.naturalWidth > 0) {
        img.closest(".gallery-item").classList.add("filled");
      }
    }
    if (img.complete) markFilled();
    else img.addEventListener("load", markFilled);
  });

  // Gallery "Show More" toggle (collapsed to first 6 tiles)
  var galleryGrid = document.getElementById("galleryGrid");
  var galleryToggle = document.getElementById("galleryToggle");
  if (galleryGrid && galleryToggle) {
    var VISIBLE_WHEN_COLLAPSED = 6;
    // Only enable the toggle if there are more tiles than we show collapsed
    if (galleryGrid.querySelectorAll(".gallery-item").length > VISIBLE_WHEN_COLLAPSED) {
      galleryGrid.classList.add("collapsed");
      galleryToggle.addEventListener("click", function () {
        var collapsed = galleryGrid.classList.toggle("collapsed");
        galleryToggle.textContent = collapsed ? "Show More" : "Show Less";
        galleryToggle.setAttribute("aria-expanded", collapsed ? "false" : "true");
      });
    } else {
      galleryToggle.style.display = "none";
    }
  }

  // Lightbox
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  var lightboxCaption = document.getElementById("lightboxCaption");
  var lightboxClose = document.getElementById("lightboxClose");

  function openLightbox(src, caption) {
    if (!lightbox) return;
    lightboxImg.src = src;
    lightboxImg.alt = caption || "";
    lightboxCaption.textContent = caption || "";
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".gallery-item").forEach(function (item) {
    item.addEventListener("click", function () {
      // Empty placeholders (no image yet) do nothing
      if (item.classList.contains("is-placeholder") && !item.classList.contains("filled")) return;
      var src = item.getAttribute("data-full") || item.getAttribute("data-job");
      var caption = item.getAttribute("data-caption");
      if (src) openLightbox(src, caption);
    });
  });

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
  });

  // Star rating widget (review form)
  var starRating = document.getElementById("starRating");
  var ratingInput = document.getElementById("ratingInput");
  if (starRating && ratingInput) {
    var stars = Array.prototype.slice.call(starRating.querySelectorAll(".star-btn"));

    function paint(value) {
      stars.forEach(function (star) {
        var v = parseInt(star.getAttribute("data-value"), 10);
        star.classList.toggle("active", v <= value);
      });
    }

    function setRating(value) {
      ratingInput.value = value;
      stars.forEach(function (star) {
        var v = parseInt(star.getAttribute("data-value"), 10);
        star.setAttribute("aria-checked", v === value ? "true" : "false");
      });
      paint(value);
    }

    stars.forEach(function (star) {
      var v = parseInt(star.getAttribute("data-value"), 10);
      star.addEventListener("click", function () { setRating(v); });
      star.addEventListener("mouseenter", function () { paint(v); });
      star.addEventListener("focus", function () { paint(v); });
      star.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight" || e.key === "ArrowUp") {
          e.preventDefault();
          var next = Math.min(5, v + 1);
          stars[next - 1].focus();
          setRating(next);
        } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
          e.preventDefault();
          var prev = Math.max(1, v - 1);
          stars[prev - 1].focus();
          setRating(prev);
        }
      });
    });

    starRating.addEventListener("mouseleave", function () {
      paint(parseInt(ratingInput.value, 10) || 0);
    });
  }
})();
