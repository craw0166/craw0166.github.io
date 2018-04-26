window.onload = init;

var activeThumbIndex = 0;

function init() {
  $(".ham").on("click", function() {
    $(".mobile-nav").slideToggle(500);
  });

  $(".img-slide-thumb").on("click", function() {
    var thisThum = this;
    changeSlide(thisThum);
  });

  autoSlider();
}

function showHideMobileMenu() {
  var mobileNav = document.querySelector("mobile-nav");

  if (mobileNav.style.display == "block") {
    mobileNav.style.display = "none";
  } else {
    mobileNav.style.display = "block";
  }
}

function changeSlide(currentThumb) {
  var targetSlide = $(currentThumb).attr("data-target");
  var slideImages = document.querySelectorAll(".img-slide");
  var imageThumbs = document.getElementsByClassName("img-slide-thumb");

  for (var j = 0; j < imageThumbs.length; j++) {
    imageThumbs[j].classList.remove("img-slide-thumb-active");

    if (imageThumbs[j] == currentThumb) {
      activeThumbIndex = j;
    }
  }

  $("#" + targetSlide).fadeIn(1200, function() {
    $(this).addClass("active");
  });

  currentThumb.classList.add("img-slide-thumb-active");
}

function autoSlider() {
  var slideThumbs = document.querySelectorAll(".img-slide-thumb");

  changeSlide(slideThumbs[activeThumbIndex]);
  activeThumbIndex++;
  if (activeThumbIndex == slideThumbs.length) {
    activeThumbIndex = 0;
  }

  setTimeout(autoSlider, 3000);
}

function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}
