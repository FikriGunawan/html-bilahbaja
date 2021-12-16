// ============== FILTER ==============
function sortListDir() {
  var list, i, switching, b, shouldSwitch, dir, switchcount = 0;
  list = document.getElementById("id01");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc"; 
  // Make a loop that will continue until no switching has been done:
  while (switching) {
    // start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("LI");
    // Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /* check if the next item should switch place with the current item,
      based on the sorting direction (asc or desc): */
      if (dir == "asc") {
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          /* if next item is alphabetically lower than current item,
          mark as a switch and break the loop: */
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
          /* if next item is alphabetically higher than current item,
          mark as a switch and break the loop: */
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
      // Each time a switch is done, increase switchcount by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
function sortListDir2() {
  var list2, i2, switching2, b2, shouldSwitch2, dir2, switchcount2 = 0;
  list2 = document.getElementById("id02");
  switching2 = true;
  // Set the sorting direction to ascending:
  dir2 = "asc"; 
  // Make a loop that will continue until no switching has been done:
  while (switching2) {
    // start by saying: no switching is done:
    switching2 = false;
    b2 = list2.getElementsByTagName("LI");
    // Loop through all list-items:
    for (i2 = 0; i2 < (b2.length - 1); i2++) {
      //start by saying there should be no switching:
      shouldSwitch2 = false;
      /* check if the next item should switch place with the current item,
      based on the sorting direction (asc or desc): */
      if (dir2 == "asc") {
        if (b2[i2].innerHTML.toLowerCase() > b2[i2 + 1].innerHTML.toLowerCase()) {
          /* if next item is alphabetically lower than current item,
          mark as a switch and break the loop: */
          shouldSwitch2 = true;
          break;
        }
      } else if (dir2 == "desc") {
        if (b2[i2].innerHTML.toLowerCase() < b2[i2 + 1].innerHTML.toLowerCase()) {
          /* if next item is alphabetically higher than current item,
          mark as a switch and break the loop: */
          shouldSwitch2= true;
          break;
        }
      }
    }
    if (shouldSwitch2) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      b2[i2].parentNode.insertBefore(b2[i2 + 1], b2[i2]);
      switching2 = true;
      // Each time a switch is done, increase switchcount by 1:
      switchcount2 ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount2 == 0 && dir2 == "asc") {
        dir2 = "desc";
        switching2 = true;
      }
    }
  }
}
function sortListDir3() {
  var list, i3, switching3, b3, shouldSwitch3, dir3, switchcount3 = 0;
  list = document.getElementById("id03");
  switching3 = true;
  // Set the sorting direction to ascending:
  dir3 = "asc"; 
  // Make a loop that will continue until no switching has been done:
  while (switching3) {
    // start by saying: no switching is done:
    switching3 = false;
    b3 = list.getElementsByTagName("LI");
    // Loop through all list-items:
    for (i3 = 0; i3 < (b3.length - 1); i3++) {
      //start by saying there should be no switching:
      shouldSwitch3 = false;
      /* check if the next item should switch place with the current item,
      based on the sorting direction (asc or desc): */
      if (dir3 == "asc") {
        if (b3[i3].innerHTML.toLowerCase() > b3[i3 + 1].innerHTML.toLowerCase()) {
          /* if next item is alphabetically lower than current item,
          mark as a switch and break the loop: */
          shouldSwitch3 = true;
          break;
        }
      } else if (dir3 == "desc") {
        if (b3[i3].innerHTML.toLowerCase() < b3[i3 + 1].innerHTML.toLowerCase()) {
          /* if next item is alphabetically higher than current item,
          mark as a switch and break the loop: */
          shouldSwitch3= true;
          break;
        }
      }
    }
    if (shouldSwitch3) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      b3[i3].parentNode.insertBefore(b3[i3 + 1], b3[i3]);
      switching3 = true;
      // Each time a switch is done, increase switchcount by 1:
      switchcount3 ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount3 == 0 && dir3 == "asc") {
        dir3 = "desc";
        switching3 = true;
      }
    }
  }
}

$(document).ready(function(){

  // ============== NAVIGATION ==============
  // Desktop
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-20vh";
    }
    prevScrollpos = currentScrollPos;
  }
  // Mobile
	$(".navBurger").click(function() {
		$(".navBurger").addClass("active");
		$(".navClose").addClass("active");
		$(".navMenuMob").addClass("slideIn");
	})
	$(".navClose").click(function(){
		$(".navBurger").removeClass("active");
		$(".navClose").removeClass("active");
		$(".navMenuMob").removeClass("slideIn");
	})

  // ============== BACK TO TOP ==============
  $("#back-top").hide();
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 400) {
        $('#back-top').fadeIn();
      } else {
        $('#back-top').fadeOut();
      }
    });
    $('a#back-top').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 2000);
      	return false;
    });
  }); 

  // ============== CAROUSEL ==============
  // # One Carousel
  $('.oneCarousel').addClass('owl-carousel owl-theme').owlCarousel({
    margin: 0,
    responsiveClass: true,
    animateOut: 'fadeOut',
    navText: ["<img src='https://bilahbaja.netlify.app/assets/images/icon/icon-arrow-left-grey.png'>","<img src='https://bilahbaja.netlify.app/assets/images/icon/icon-arrow-right-grey.png'>"],
    loop: true,
    autoplay: false,
    dots: true,
    nav: true,
    responsive:{
      0: {
        items: 1,
        dots: true,
        nav: true
      },
      600: {
        items: 1,
        dots: true,
        nav: true
      },
      1000: {
        items: 1,
        dots: true,
        nav: true
      }
    }
  })

  // # Two Carousel
  $('.twoCarousel').addClass('owl-carousel owl-theme').owlCarousel({
    margin: 0,
    responsiveClass: true,
    navText: ["<img src='https://bilahbaja.netlify.app/assets/images/icon/icon-arrow-left.png'>","<img src='https://bilahbaja.netlify.app/assets/images/icon/icon-arrow-right.png'>"],
    loop: true,
    autoplay: false,
    dots: true,
    nav: true,
    responsive:{
      0: {
        items: 1,
        dots: true,
        nav: true
      },
      600: {
        items: 1,
        dots: true,
        nav: true
      },
      1000: {
        items: 2,
        dots: true,
        nav: true
      }
    }
  })

  // # Three Carousel
  $('.threeCarousel').addClass('owl-carousel owl-theme').owlCarousel({
    margin: 0,
    responsiveClass: true,
    navText: ["<img src='https://bilahbaja.netlify.app/assets/images/icon/icon-arrow-left-grey.png'>","<img src='https://bilahbaja.netlify.app/assets/images/icon/icon-arrow-right-grey.png'>"],
    loop: true,
    autoplay: false,
    dots: true,
    nav: true,
    responsive:{
      0: {
        items: 1,
        dots: true,
        nav: true
      },
      600: {
        items: 1,
        dots: true,
        nav: true
      },
      1000: {
        items: 3,
        dots: true,
        nav: true
      }
    }
  })

  // # Sync Carousel Home Header
  var sync1 = $("#owlSync1");
  var sync2 = $("#owlSync2");
  var slidesPerPage = 4;
  var syncedSecondary = true;
  sync1.owlCarousel({
    items : 1,
    slideSpeed : 2000,
    animateOut: 'fadeOut',
    nav: true,
    autoplay: true,
    touchDrag: false,
    mouseDrag: false,
    dots: false,
    loop: true,    
    responsiveRefreshRate : 200,
    navText: ["<img src='https://bilahbaja.netlify.app/assets/images/icon/icon-arrow-left-grey.png'>","<img src='https://bilahbaja.netlify.app/assets/images/icon/icon-arrow-right-grey.png'>"],
  }).on('changed.owl.carousel', syncPosition);
  sync2
    .on('initialized.owl.carousel', function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
    items : slidesPerPage,
    dots: false,
    nav: false,
    smartSpeed: 200,
    slideSpeed : 500,
    slideBy: slidesPerPage,
    responsiveRefreshRate : 100
  }).on('changed.owl.carousel', syncPosition2);
  function syncPosition(el) {
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);
    if(current < 0) {
      current = count;
    }
    if(current > count) {
      current = 0;
    }
    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();
    if (current > end) {
      sync2.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }
  function syncPosition2(el) {
    if(syncedSecondary) {
      var number = el.item.index;
      sync1.data('owl.carousel').to(number, 100, true);
    }
  }
  sync2.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
  });

  // # Sync Carousel Home Portfolio
  var sync3 = $("#owlSync3");
  var sync4 = $("#owlSync4");
  var slidesPerPageHP = 4;
  var syncedSecondaryHP = true;
  sync3.owlCarousel({
    items : 1,
    slideSpeed : 2000,
    animateOut: 'fadeOut',
    nav: true,
    autoplay: false,
    touchDrag: false,
    mouseDrag: false,
    dots: false,
    loop: true,    
    responsiveRefreshRate : 200,
    navText: ["<img src='https://bilahbaja.netlify.app/assets/images/icon/icon-arrow-left-grey.png'>","<img src='https://bilahbaja.netlify.app/assets/images/icon/icon-arrow-right-grey.png'>"],
  }).on('changed.owl.carousel', syncPosition3);
  sync4
    .on('initialized.owl.carousel', function () {
      sync4.find(".owl-item").eq(0).addClass("currentHP");
    })
    .owlCarousel({
    items : slidesPerPageHP,
    dots: false,
    nav: false,
    smartSpeed: 200,
    slideSpeed : 500,
    slideBy: slidesPerPageHP,
    responsiveRefreshRate : 100
  }).on('changed.owl.carousel', syncPosition4);
  function syncPosition3(el) {
    var countHP = el.item.countHP-1;
    var currentHP = Math.round(el.item.index - (el.item.countHP/2) - .5);
    if(currentHP < 0) {
      currentHP = countHP;
    }
    if(currentHP > countHP) {
      currentHP = 0;
    }
    sync4
      .find(".owl-item")
      .removeClass("currentHP")
      .eq(currentHP)
      .addClass("currentHP");
    var onscreenHP = sync4.find('.owl-item.active').length - 1;
    var startHP = sync4.find('.owl-item.active').first().index();
    var endHP = sync4.find('.owl-item.active').last().index();
    if (currentHP > endHP) {
      sync4.data('owl.carousel').to(currentHP, 100, true);
    }
    if (currentHP < startHP) {
      sync4.data('owl.carousel').to(currentHP - onscreenHP, 100, true);
    }
  }
  function syncPosition4(el) {
    if(syncedSecondaryHP) {
      var numberHP = el.item.index;
      sync3.data('owl.carousel').to(numberHP, 100, true);
    }
  }
  sync4.on("click", ".owl-item", function(e){
    e.preventDefault();
    var numberHP = $(this).index();
    sync3.data('owl.carousel').to(numberHP, 300, true);
  });

  // # Sync Carousel About Us Journey
  var sync5 = $("#owlSync5");
  var sync6 = $("#owlSync6");
  var slidesPerPageAJ = 4;
  var syncedSecondaryAJ = true;
  sync5.owlCarousel({
    items : 1,
    slideSpeed : 2000,
    animateOut: 'fadeOut',
    nav: true,
    autoplay: false,
    touchDrag: false,
    mouseDrag: false,
    dots: false,
    loop: true,    
    responsiveRefreshRate : 200,
    navText: ["<img src='https://bilahbaja.netlify.app/assets/images/icon/icon-arrow-left-grey.png'>","<img src='https://bilahbaja.netlify.app/assets/images/icon/icon-arrow-right-grey.png'>"],
  }).on('changed.owl.carousel', syncPosition3);
  sync6
    .on('initialized.owl.carousel', function () {
      sync6.find(".owl-item").eq(0).addClass("currentAJ");
    })
    .owlCarousel({
    items : slidesPerPageAJ,
    dots: false,
    nav: false,
    smartSpeed: 200,
    slideSpeed : 500,
    slideBy: slidesPerPageAJ,
    responsiveRefreshRate : 100
  }).on('changed.owl.carousel', syncPosition4);
  function syncPosition3(el) {
    var countAJ = el.item.countAJ-1;
    var currentAJ = Math.round(el.item.index - (el.item.countAJ/2) - .5);
    if(currentAJ < 0) {
      currentAJ = countAJ;
    }
    if(currentAJ > countAJ) {
      currentAJ = 0;
    }
    sync6
      .find(".owl-item")
      .removeClass("currentAJ")
      .eq(currentAJ)
      .addClass("currentAJ");
    var onscreenAJ = sync6.find('.owl-item.active').length - 1;
    var startAJ = sync6.find('.owl-item.active').first().index();
    var endAJ = sync6.find('.owl-item.active').last().index();
    if (currentAJ > endAJ) {
      sync6.data('owl.carousel').to(currentAJ, 100, true);
    }
    if (currentAJ < startAJ) {
      sync6.data('owl.carousel').to(currentAJ - onscreenAJ, 100, true);
    }
  }
  function syncPosition4(el) {
    if(syncedSecondaryAJ) {
      var numberAJ = el.item.index;
      sync5.data('owl.carousel').to(numberAJ, 100, true);
    }
  }
  sync6.on("click", ".owl-item", function(e){
    e.preventDefault();
    var numberAJ = $(this).index();
    sync5.data('owl.carousel').to(numberAJ, 300, true);
  });

});


// =============================================== Accordion ===============================================
$('.toggle').click(function(e) {
  e.preventDefault();

  var $this = $(this);

  if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);
  } else {
      $this.parent().parent().find('li .inner').removeClass('show');
      $this.parent().parent().find('li .inner').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
  }
});
// =============================================== Accordion ===============================================