var splide = new Splide(".splide");
splide.mount();


var viewportWidth = window.innerWidth;

if (viewportWidth < 440) {
  $(".top-bar-item").html(
    "BOOK TICKETS NOW <a href='' style='text-decoration: underline'>LEARN MORE</a>"
  );

  $("#navbar").removeClass("navbar").addClass("mobile-navbar");

  $(".title-text").text("SQUAMISH VALLEY ON THE EDGE");

  $(".explore-section").prepend(
    "<img width='100%' height='255px' src='/assets/img/background.png'>"
  );

  $(".explore-title").text("DESTINATIONS");

  $(".tours-and-tickets").prepend(
    "<img class='mobile-image' src='/assets/img/inside_tent.png' />"
  );

  var lastFindYourNextCard = $(".find-your-next-card")[1];
  lastFindYourNextCard.style.display = "none";

  $(".find-your-next-title").text("FIND YOUR NEXT ADVENTURE");

  $(".find-your-next-paragraph").text(
    "We're here to help you dream up your next trip, figure out the details, and reserve experiences at over 4,200 facilities and 113,000 individual sites across the country. There's something for everyone on Recreation.gov, so get out there, experience the USA, and bring home a story!"
  );

  $(".discount-title").text("STAY UP-TO-DATE ON NEW ARRIVALS & NEW DEALS.");

  $(".mobile-footer-nav").css("display", "block");

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
} else if (viewportWidth > 1440) {
  $(".top-bar-left").html("<span class='top-bar-item'>BOOK TICKET NOW</span>");
  $(".top-bar-right").html(`<ul>
  <li class='top-bar-item'>HELP</li>
  <li class='top-bar-item'>SIGN UP</li>
  <li class='top-bar-item'>LOGIN</li>
</ul>`);
}

function showMobileNav() {
  $(".mobile-navbar").css("display", "flex");
  window.alert("dont doubt stupid");
}
